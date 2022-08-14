import React from "react"
import { useState } from 'react';
import { searchFirstNamesAlls } from '../graphql/custom_queries'
import { searchLastNamesAlls } from '../graphql/custom_queries';
import { API, graphqlOperation } from 'aws-amplify';
import { profanity } from '@2toad/profanity';
import { boeseworte } from '../assets/boesworte';
profanity.addWords(boeseworte);


//set state
export default function Name() {
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


    let firstBoese = false
    let lastBoese = false
    const explainerStr = "Ausländisch klingende Namen werden bei der Jobsuche benachteiligt. Setze ein Zeichen für Chancengleichheit."
    //string with template literal
    //new errorfunction for template litera
    const explainerStrSpecial = "Yay! Dein Name ist so individuell, dass wir kein Match gefunden haben! Wir haben für dich einen zufälligen Namen ausgewählt."

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
        event.preventDefault()
        //check for swerwords in first name

        firstBoese = profanity.exists(inputNameData.firstName)
        lastBoese = profanity.exists(inputNameData.lastName)

        if (firstBoese || lastBoese) {
            setFirstNameData(firstNameBoese)
            setLastNameData([])
            setExplainerData(explainerStrSpecial)


        } else {
            if (inputNameData.firstName === "" && inputNameData.lastName === "") {
                //empty first and lastname state if both are empty
                setFirstNameData([])
                setLastNameData([])
            } else if (inputNameData.firstName === "") {
                //empty firstname state if firstname is empty and fetch lastname
                setFirstNameData([])
                fetchLastNames()

            } else if (inputNameData.lastName === "") {
                //empty lastname state if lastname is empty and fetch firstname
                setLastNameData([])
                fetchFirstNames()
            } else {
                //fetch first and lastname
                fetchFirstNames()
                fetchLastNames()
            }

        }

    }


    //return output data for first and last name
    const firstNameOutput = firstNamesData.map(fistName => {
        //on error

        switch (inputNameData.languageSelect) {
            case 'arabic':
                return <h3 key={fistName.id} >{fistName.arab_first}</h3>
            case 'turkish':
                return <h3 key={fistName.id} >{fistName.turkish_first}</h3>
            case 'sorani':
                return <h3 key={fistName.id} >{fistName.sorani_first}</h3>
            case 'kurmanji':
                return <h3 key={fistName.id} >{fistName.kurmanji_first}</h3>
            case 'pakistani':
                return <h3 key={fistName.id} >{fistName.pakistani_first}</h3>
            case 'ukrain':
                return <h3 key={fistName.id} >{fistName.ukrainian_first}</h3>
            case 'persian':
                return <h3 key={fistName.id} >{fistName.persian_first}</h3>
            case 'german':
                return <h3 key={fistName.id} >{fistName.german_first}</h3>
            default:
                return null
        }
    })

    const lastNameOutput = lastNamesData.map(lastName => {
        switch (inputNameData.languageSelect) {
            case 'arabic':
                return <h3 key={lastName.id} >{lastName.arab_last}</h3>
            case 'turkish':
                return <h3 key={lastName.id} >{lastName.turkish_last}</h3>
            case 'sorani':
                return <h3 key={lastName.id} >{lastName.sorani_last}</h3>
            case 'kurmanji':
                return <h3 key={lastName.id} >{lastName.kurmanji_last}</h3>
            case 'pakistani':
                return <h3 key={lastName.id} >{lastName.pakistani_last}</h3>
            case 'ukrain':
                return <h3 key={lastName.id} >{lastName.ukrainian_last}</h3>
            case 'persian':
                return <h3 key={lastName.id} >{lastName.persian_last}</h3>
            case 'german':
                return <h3 key={lastName.id} >{lastName.german_last}</h3>
            default:
                return null
        }
    })


    return (
        <div className="container">
            <div className="form">
                <input
                    type="text"
                    placeholder="Vorname"
                    className="form--input"
                    name="firstName"
                    value={inputNameData.firstName}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    placeholder="Nachname"
                    className="form--input"
                    name="lastName"
                    value={inputNameData.lastName}
                    onChange={handleChange}
                />
                <select
                    id="languageSelect"
                    value={inputNameData.languageSelect}
                    onChange={handleChange}
                    name="languageSelect"
                >
                    <option value="arabic">ARABISCH</option>
                    <option value="turkish">TÜRKISCH</option>
                    <option value="sorani">SORANI</option>
                    <option value="kurmanji">KURMANJI</option>
                    <option value="pakistani">PAKISTANI</option>
                    <option value="ukrain">UKRAINISCH</option>
                    <option value="persian">PERSISCH</option>
                    <option value="german">DEUTSCH</option>
                </select>
                <button
                    className="form--button"
                    onClick={handleSubmit}

                >
                    Get a Name
                </button>
            </div>
            <div className="Name-input">{firstNameOutput}</div>
            <div className="Name-input">{lastNameOutput}</div>
            <div className="explainer">{explainerData}</div>
        </div>
    )
}