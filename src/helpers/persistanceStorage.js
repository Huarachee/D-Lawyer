export const getItem = key => {
    try {
        return JSON.parse(localStorage.getItem(key))
    } catch (e) { // Если мы словили ошибку, например, невалидные данные то
        console.log('Error getting data from localStorage', e) // Сообщаем об ошибке и вываливаем ту самую ошибку в консоль.
        return null
    }
}

export const setItem = (key, data) => {
    try {
        localStorage.setItem(key, JSON.stringify(data))
    } catch (e) {
        console.log('Errors saving data in localStorage', e)
    }
}