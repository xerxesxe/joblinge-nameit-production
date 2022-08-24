import React from "react"
import { useState } from "react";
import { searchFirstNamesAlls } from '../graphql/custom_queries'
import { searchLastNamesAlls } from '../graphql/custom_queries';
import { API, graphqlOperation } from 'aws-amplify';
import { profanity } from '@2toad/profanity';
import { boeseworte } from '../assets/boesworte';
import AutosizeInput from 'react-18-input-autosize';
import button from '../assets/button.svg';

import { motion, useAnimationControls } from 'framer-motion';
import "./nameGen.css"

profanity.addWords(boeseworte);



export default function Name({ setUserInputState }) {
    //create new clas for profanity filter

    //set states for first and last name
    const [firstNamesData, setFirstNameData] = useState([])
    const [lastNamesData, setLastNameData] = useState([])
    //set states for input fields
    const [inputNameData, setInputNameData] = useState({
        firstName: "",
        lastName: "",
        languageSelect: "arabic",
        gender: ""
    })

    const [explainerData, setExplainerData] = useState("Ausländisch klingende Namen werden bei der Jobsuche benachteiligt. Setze ein Zeichen für Chancengleichheit.")



    const explainerStr = "Ausländisch klingende Namen werden bei der Jobsuche benachteiligt. Setze ein Zeichen für Chancengleichheit."
    //string with template literal
    //new errorfunction for template litera
    const explainerStrSpecial = "*Yay! Dein Name ist so individuell, dass wir keinen Match gefunden haben! Wir haben für dich einen zufälligen Namen ausgewählt."

    //first name output if match not found
    const firstNameEmpty = [{
        arab_first: "SIYAN*",
        gender_first: "Neutral",
        german_first: "TONI*",
        id: "EmptyFirstname",
        kurmanji_first: "ARJIN*",
        pakistani_first: "KANISHI*",
        persian_first: "JAVADI*",
        sorani_first: "AJE*",
        turkish_first: "ZERIN*",
        ukrainian_first: "SAVVA*",
    }]
    //last name output if match not found
    const lastNameEmpty = [{
        arab_last: "ALGHAMDI*",
        gender_last: "MALE",
        german_last: "MEIER*",
        id: "EmptylastName",
        kurmanji_last: "KOÇLARDAN*",
        pakistani_last: "ABDUL GHANI*",
        persian_last: "AFSHAR*",
        sorani_last: "ABDULMALIK*",
        turkish_last: "YILDIRIM*",
        ukrainian_last: "KYRYCHENKO*",
    }]
    //name output if profanity found
    const firstNameBoese = [{
        arab_first: "@#$%&!",
        gender_first: "@#$%&!",
        german_first: "@#$%&!",
        id: "@#$%&!",
        kurmanji_first: "@#$%&!",
        pakistani_first: "@#$%&!",
        persian_first: "@#$%&!",
        sorani_first: "@#$%&!",
        turkish_first: "@#$%&!",
        ukrainian_first: "@#$%&!",
    }]



    function emptyLastFetch() {
        setLastNameData(lastNameEmpty)
        setExplainerData(explainerStrSpecial)
    }
    function emptyFirstFetch() {
        setFirstNameData(firstNameEmpty)
        setExplainerData(explainerStrSpecial)
    }

    //event handler for Form input
    function handleChange(event) {
        const { name, value } = event.target

        if (name === "firstName") {
            setFirstNameData([])
            setExplainerData(explainerStr)

        } else if (name === "lastName") {
            setLastNameData([])
            setExplainerData(explainerStr)
        }
        setInputNameData(prevName => ({
            ...prevName,
            [name]: name === "languageSelect" ? value : value.toUpperCase()

        }))

    }

    //async functions for fetching Names from API and setting states for first and last name
    const fetchFirstNames = async () => {
        try {
            const filter = {
                all_first: {
                    eq: inputNameData.firstName
                },
            }
            const res = await API.graphql(
                graphqlOperation(searchFirstNamesAlls, { filter: filter, limit: 1 })
            );

            const firstNames = res.data.searchFirstNamesAlls.items

            //if nothing fetched set special object
            firstNames.length === 0 ? emptyFirstFetch() : setFirstNameData(firstNames)
        } catch (error) {
            console.log("error on fetching first name")
        }
    }

    const fetchLastNames = async () => {
        try {
            const filter = {
                all_last: {
                    eq: inputNameData.lastName
                },
            }
            const res = await API.graphql(
                graphqlOperation(searchLastNamesAlls, { filter: filter, limit: 1 })
            );
            const lastNames = res.data.searchLastNamesAlls.items
            lastNames.length === 0 ? emptyLastFetch() : setLastNameData(lastNames)
        } catch (error) {
            console.log("error on fetching last name")
        }
    }


    function handleSubmit(event) {
        let firstBoese = false
        let lastBoese = false
        event.preventDefault()
        firstBoese = profanity.exists(inputNameData.firstName)
        lastBoese = profanity.exists(inputNameData.lastName)

        if (firstBoese || lastBoese) {
            setFirstNameData(firstNameBoese)
            setLastNameData([])
            setExplainerData(explainerStrSpecial)
            setUserInputState(false)


        } else {
            if (inputNameData.firstName === "" && inputNameData.lastName === "") {
                //empty first and lastname state if both are empty
                setFirstNameData([])
                setLastNameData([])
                setUserInputState(false)
            } else if (inputNameData.firstName === "") {
                //empty firstname state if firstname is empty and fetch lastname
                setFirstNameData([])
                fetchLastNames()
                setUserInputState(true)

            } else if (inputNameData.lastName === "") {
                //empty lastname state if lastname is empty and fetch firstname
                setLastNameData([])
                fetchFirstNames()
                setUserInputState(true)
            } else {
                //fetch first and lastname
                fetchFirstNames()
                fetchLastNames()
                setUserInputState(true)
            }

        }

    }


    //return output data for first and last name
    const firstNameOutput = firstNamesData.map(firstName => {
        //on error
        switch (inputNameData.languageSelect) {
            case 'arabic': return firstName.arab_first
            case 'turkish': return firstName.turkish_first
            case 'sorani': return firstName.sorani_first
            case 'persian': return firstName.persian_first
            case 'kurmanji': return firstName.kurmanji_first
            case 'pakistani': return firstName.pakistani_first
            case 'german': return firstName.german_first
            case 'ukrain': return firstName.ukrainian_first
            default: return null

        }
    }).toString()



    const lastNameOutput = lastNamesData.map(lastName => {
        switch (inputNameData.languageSelect) {
            case 'arabic': return lastName.arab_last
            case 'turkish': return lastName.turkish_last
            case 'sorani': return lastName.sorani_last
            case 'kurmanji': return lastName.kurmanji_last
            case 'pakistani': return lastName.pakistani_last
            case 'ukrain': return lastName.ukrainian_last
            case 'persian': return lastName.persian_last
            case 'german': return lastName.german_last
            default:
                return null
        }
    }).toString()



    //------------------------------------------framer Motion --------------------------------------------------------------//
    //callback function for Button returns object if isInputEmty is true
    const controlsEmpty = useAnimationControls()
    const controlsNotEmpty = useAnimationControls()
    const buttonInputValidation = () => {

        if (inputNameData.firstName === "" && inputNameData.lastName === "") {
            controlsEmpty.start({
                rotate: [-3, 3, -3, 0],
                transition: { duration: 0.4 },
            })
            return {
                scale: 0.9,
                rotate: [-10, 10, -10, 10],
                transition: {
                    type: "tween",
                    duration: 0.5,

                }
            }

        } else {
            controlsNotEmpty.start({
                opacity: [0, 1],
                transition: { duration: 2.5, ease: "easeInOut" }
            })
            return {
                scale: 0.8,
                rotate: -360,
                transition: {
                    type: "spring"
                }
            }
        }
    }

    const inputCaretAnimationFirst = () => {
        if (inputNameData.firstName === "") {
            return {
                opacity: [1, 0],
                transition: { repeat: Infinity, duration: [0.9], ease: "linear" }
            }
        }
        else {
            return {
                opacity: [0, 0],
                transition: { repeat: Infinity, duration: [0.9], ease: "linear" }
            }
        }
    }


    const inputCaretAnimationLast = () => {
        if (inputNameData.lastName === "") {
            return {
                opacity: [1, 0],
                transition: { repeat: Infinity, duration: [0.9], ease: "linear" }
            }
        }
        else {
            return {
                opacity: [0, 0],
                transition: { repeat: Infinity, duration: [0.9], ease: "linear" }
            }
        }
    }

    //------------------------------------------screenshot--------------------------------------------------------------//

    return (
        <div className="name-content">
            <div className="form">
                <motion.h1 animate={controlsEmpty} className="form--input">
                    <div className="firstnameInput--wrapper">
                        <motion.span animate={inputCaretAnimationFirst} className="blinking-caret">|</motion.span>
                        <AutosizeInput
                            type="text"
                            maxLength={16}
                            placeholder="DEIN VORNAME"
                            inputClassName="form--input--firstname"
                            autoFocus={true}
                            name="firstName"
                            value={inputNameData.firstName}
                            onChange={handleChange}
                            onSubmit={handleSubmit}
                            style={inputNameData.firstName === "" ? { "caretColor": "transparent" } : { "caretColor": "var(--primary)" }}
                        /></div>
                    <div className="lastnameInput--wrapper">
                        <motion.span animate={inputCaretAnimationLast} className="blinking-caret">|</motion.span>
                        <AutosizeInput
                            maxLength={16}
                            type="text"
                            placeholder="NACHNAME"
                            inputClassName="form--input--lastname"
                            name="lastName"
                            value={inputNameData.lastName}
                            onChange={handleChange}
                            onSubmit={handleSubmit}
                            style={inputNameData.lastName === "" ? { "caretColor": "transparent" } : { "caretColor": "var(--primary)" }}
                        /></div>
                </motion.h1>

                <div className="form--select--button">
                    <div className="form--select">
                        <h3 >heißt auf                        </h3>
                        <select
                            id="languageSelect"
                            value={inputNameData.languageSelect}
                            onChange={handleChange}
                            name="languageSelect"
                            className="form--selector"
                        >
                            <option value="arabic">Arabisch</option>
                            <option value="turkish">Türkisch</option>
                            <option value="sorani">Sorani</option>
                            <option value="kurmanji">Kurmanji</option>
                            <option value="pakistani">Urdu</option>
                            <option value="ukrain">Ukrainisch</option>
                            <option value="persian">Persisch</option>
                            <option value="german">Deutsch</option>
                        </select>

                    </div>
                    <button

                        className="form--button"
                    ><motion.img
                            src={button}
                            alt="button for submitting"
                            onClick={handleSubmit}
                            whileHover={{
                                scale: 1.1,
                                rotate: -15
                            }}
                            whileTap={buttonInputValidation}

                            className="form-button-image" />

                    </button>


                </div>
            </div>
            <div className="output">

                <motion.h1 className="Name-output" animate={controlsNotEmpty}>{firstNameOutput}</motion.h1>
                <motion.h1 className="Name-output" animate={controlsNotEmpty}>{lastNameOutput}</motion.h1>
            </div>
            <p className="explainer color-darkblue">{explainerData}</p>
        </div>
    )
}