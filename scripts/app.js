"use strict"

import { meals } from "../meal.js"

const list = document.getElementById("meal-list")

// URL state helpers
function getStateFromURL() {
    const params = new URLSearchParams(window.location.search)
    return {
        query: params.get("q") || "",
        sort: params.get("sort") || "",
    }
}

function setStateInURL({ query, sort }, { replace = false } = {}) {
    const url = new URL(window.location.href)
    const params = url.searchParams
    if (query !== undefined) {
        if (query) params.set("q", query)
        else params.delete("q")
    }
    if (sort !== undefined) {
        if (sort) params.set("sort", sort)
        else params.delete("sort")
    }
    const newURL =
        url.pathname + (params.toString() ? `?${params.toString()}` : "") + url.hash
    if (replace) {
        history.replaceState(null, "", newURL)
    } else {
        history.pushState(null, "", newURL)
    }
}

function rerenderList() {
    list.innerHTML = ""

    const { query, sort } = getStateFromURL()

    if (!meals || meals.length === 0) {
        const notFound = document.createElement("p")

        notFound.className = "not-found-text"
        notFound.textContent = `No records.`

        list.appendChild(notFound)

        return
    }

    if (sort === "name-asc") {
        meals.sort((a, b) => {
            return a.name.localeCompare(b.name)
        })
    }
    if (sort === "name-desc") {
        meals.sort((a, b) => {
            return b.name.localeCompare(a.name)
        })
    }

    let isFound = false

    const q = (query || "").toLowerCase()

    meals.forEach((entryData) => {
        if (!q) {
            list.appendChild(createEntry(entryData))
            isFound = true
            return
        }

        if (
            entryData.name.toLowerCase().includes(q) ||
            (entryData.description && entryData.description.toLowerCase().includes(q)) ||
            (Array.isArray(entryData.tags) &&
                entryData.tags.some(tag => String(tag).toLowerCase().includes(q)))
        ) {
            isFound = true
            list.appendChild(createEntry(entryData))
        }
    })

    if (!isFound) {
        const notFound = document.createElement("p")

        notFound.className = "not-found-text"
        if (query) {
            notFound.textContent = `Nothing found when searching for "${query}"`
        } else {
            notFound.textContent = `No records.`
        }

        list.appendChild(notFound)
    }
}

export function createEntry(mealData) {
    const template = document.createElement("template")

    const html = String.raw

    const { name, tags, description, id } = mealData

    template.innerHTML = html`
        <li class="card meal-card" data-entry-id="">
            <div class="meal-list-item-container">
                <h3 class="meal-list-item-header"></h3>
                <p class="meal-list-item-description"></p>
            </div>
            <p class="meal-list-item-tags"></p>
        </li>
    `

    const element = template.content.firstElementChild

    element.querySelector(".meal-list-item-header").textContent = name
    element.querySelector(".meal-list-item-tags").textContent = tags && tags.join && tags.join(" · ")
    element.querySelector(".meal-list-item-description").textContent =
        description

    return element
}

const search = document.getElementById("search-input")
const filter = document.getElementById("filter")

function syncControlsFromURL() {
    const params = new URLSearchParams(window.location.search)
    const hasQuery = params.has("q")
    const hasSort = params.has("sort")
    const { query, sort } = getStateFromURL()

    if (search) {
        if (hasQuery) {
            search.value = query || ""
        }
        // else leave the input’s default value
    }

    if (filter) {
        if (hasSort) {
            filter.value = sort || ""
        } else {
            // Use the select’s default (from HTML) and put it into the URL
            const defaultSort = filter.value || ""
            if (defaultSort) {
                setStateInURL({ sort: defaultSort }, { replace: true })
                filter.value = defaultSort
            }
        }
    }
}

search.addEventListener("input", (e) => {
    e.preventDefault()
    setStateInURL({ query: e.target.value }, { replace: false })
    rerenderList()
})

filter.addEventListener("change", (e) => {
    e.preventDefault()
    setStateInURL({ sort: e.target.value }, { replace: false })
    rerenderList()
})

// Keep UI and list in sync with browser navigation
window.addEventListener("popstate", () => {
    syncControlsFromURL()
    rerenderList()
})

// Initial sync from URL and render
syncControlsFromURL()
rerenderList()
