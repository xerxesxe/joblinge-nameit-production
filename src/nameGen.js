import React from "react"
import { useState } from 'react';
import { filterFirstName } from './graphql/custom_queries';
import { API } from 'aws-amplify';
// import { SelectField } from '@aws-amplify/ui-react';



export default function Name() {
    const [namesData, setNameData] = useState([])

    const [inputNameData, setInputNameData] = useState({
        firstName: "",
        lastName: "",
        languageSelect: "arabic",
        gender: ""
    })


    function handleChange(event) {
        const { name, value } = event.target
        setInputNameData(prevName => ({
            ...prevName,
            [name]: name === "languageSelect" ? value : value.toUpperCase()
        }))
    }

    function handleSubmit(event) {
        event.preventDefault()
        if (!inputNameData) return
        console.log(inputNameData)

        const fetchNames = async () => {
            const res = await API.graphql({ query: filterFirstName, variables: { NameFilter: inputNameData.firstName } })

            return (res.data.listFirstNamesAlls.items)

        }
        fetchNames().then(names => setNameData(names))

    }

    //return output data        
    const nameOutput = namesData.map(name => {
        switch (inputNameData.languageSelect) {
            case 'arabic':
                return <h3>{name.arab_first}</h3>
            case 'turkish':
                return <h3>{name.turkish_first}</h3>
            case 'sorani':
                return <h3>{name.sorani_first}</h3>
            case 'kurmanji':
                return <h3>{name.kurmanji_first}</h3>
            case 'pakistani':
                return <h3>{name.pakistani_first}</h3>
            case 'ukrain':
                return <h3>{name.ukrainian_first}</h3>
            case 'persian':
                return <h3>{name.persian_first}</h3>
            case 'german':
                return <h3>{name.german_first}</h3>
            default:
                return null
        }
    })


    console.log(namesData)

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
                    Get a name
                </button>
            </div>
            <ul className="name-output">

                {nameOutput}

            </ul>
        </main>
    )
}