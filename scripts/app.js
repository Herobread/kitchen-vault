"use strict"

import { meals } from "../meal.js"

const list = document.getElementById("meal-list")

rerenderList()

window.query = null
window.sort = null


export function createEntry(mealData) {
    const template = document.createElement("template")

    const html = String.raw

    const { name, tags, description, id } = mealData

    template.innerHTML = html`
        <li class="card meal-card" data-entry-id="">
            <div class="meal-list-item-container">
                <h3 class="meal-list-item-header"></h3>
                <p class="meal-list-item-tags"></p>
            </div>
            <p class="meal-list-item-description"></p>
        </li>
    `

    const element = template.content.firstElementChild

    element.querySelector(".meal-list-item-header").textContent = name
    element.querySelector(".meal-list-item-tags").textContent = tags && tags.join && tags.join(" · ")
    element.querySelector(".meal-list-item-description").textContent =
        description

    return element
}

/////////////////////////////////////////////////////////////////////////////////////////////////////

function rerenderList() {
    list.innerHTML = ""
  
    if (!meals || meals.length === 0) {
        const notFound = document.createElement("p")

        notFound.className = "not-found-text"
        notFound.textContent = `No records.`

        list.appendChild(notFound)

        return
    }

    if (window.sort === "name-asc") {
        meals.sort((a, b) => {
            return a.name.localeCompare(b.name)
        })
    }
    if (window.sort === "name-desc") {
        meals.sort((a, b) => {
            return b.name.localeCompare(a.name)
        })
    }

    let isFound = false

    meals.forEach((entryData) => {
        if (window.query == null || window.query == "") {
            list.appendChild(createEntry(entryData))
            isFound = true
            return
        }

        if (
            entryData.name.toLowerCase().includes(window.query.toLowerCase()) ||
            entryData.description.toLowerCase().includes(window.query.toLowerCase()) ||
            (Array.isArray(entryData.tags) &&
            entryData.tags.some(tag => tag.toLowerCase().includes(window.query.toLowerCase())))
        ) {
            isFound = true
            list.appendChild(createEntry(entryData))
        }
    })

    if (!isFound) {
        const notFound = document.createElement("p")

        notFound.className = "not-found-text"
        if (window.query) {
            notFound.textContent = `Nothing found when searching for "${window.query}"`
        } else {
            notFound.textContent = `No records.`
        }

        list.appendChild(notFound)
    }
}

////////////////////////////////////////////////////////////////////////////////////////////////////

const search = document.getElementById("search-input")

search.addEventListener("input", (e) => {
    e.preventDefault()

    window.query = e.target.value

    rerenderList()
})

////////////////////////////////////////////////////////////////////////////////////////////////////

const filter = document.getElementById("filter")

filter.addEventListener("change", (e) => {
    e.preventDefault()

    window.sort = e.target.value

    rerenderList()
})
