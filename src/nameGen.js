import React from "react"
import { useState } from 'react';
import { filterFirstName } from './graphql/custom_queries';
import { filterLastName } from './graphql/custom_queries';
import { API } from 'aws-amplify';
// import { SelectField } from '@aws-amplify/ui-react';



export default function Name() {
    const [firstNamesData, setFirstNameData] = useState([])
    const [lastNamesData, setLastNameData] = useState([])

    const [inputNameData, setInputNameData] = useState({
        firstName: "",
        lastName: "",
        languageSelect: "arabic",
        gender: ""
    })

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



    function handleChange(event) {
        const { name, value } = event.target

        if (name === "firstName") {
            setFirstNameData([])
        } else if (name === "lastName") {
            setLastNameData([])
        }

        setInputNameData(prevName => ({
            ...prevName,
            [name]: name === "languageSelect" ? value : value.toUpperCase()

        }))
    }

    //async functions for fetching Names
    const fetchFirstNames = async () => {
        try {
            const res = await API.graphql({ query: filterFirstName, variables: { FirstNameFilter: inputNameData.firstName } })
            const firstNames = res.data.listFirstNamesAlls.items
            //if nothing fetched set special object
            firstNames.length === 0 ? setFirstNameData(firstNameEmpty) : setFirstNameData(firstNames)

        } catch (error) {
            console.log("error on fetching first name")
        }
    }

    const fetchLastNames = async () => {
        try {
            const res = await API.graphql({ query: filterLastName, variables: { LastNameFilter: inputNameData.lastName } })
            const lastNames = res.data.listLastNamesAlls.items
            lastNames.length === 0 ? setLastNameData(lastNameEmpty) : setLastNameData(lastNames)
        } catch (error) {
            console.log("error on fetching last name")
        }
    }

    function handleSubmit(event) {
        event.preventDefault()
        if (inputNameData.firstName === "" && inputNameData.lastName === "") {
            setFirstNameData([])
            setLastNameData([])
        }
        else if (!(inputNameData.firstName === "") && inputNameData.lastName === "") {
            fetchFirstNames()
            setLastNameData([])
        }
        else if (inputNameData.firstName === "" && !(inputNameData.lastName === "")) {
            fetchLastNames()
            setFirstNameData([])
        }
        else {
            fetchFirstNames()
            fetchLastNames()
        }

    }


    //return output data  
    const firstNameOutput = firstNamesData.map(fistName => {
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
        <main className="main">
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

        </main >
    )
}