async function getDataFromApi() {
    const response = await fetch('https://mocki.io/v1/8ea1d511-d755-40af-bd90-cd1f5d94edb7')
    const data = await response.json()
    const students = data.data
    return students
}

export default getDataFromApi