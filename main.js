function calculateDaysNeeded(){
    // get the value from the input field

    const pageInputElement = document.getElementById('first_name2')
    const pageInputValue = pageInputElement.value
    console.log(pageInputValue)
    //  const pageInputValue = document.getElementById('first_name2').value //


    // use formula to find page needed
    let total = 604
    let result = total / pageInputValue
    const niceResult = result.toFixed(0)
    console.log('result', result)

    // get the element of the card
    const resultArea = document.getElementById('result')
    let message = 'Please input a valid number of pages'

    if (pageInputValue && pageInputValue > 0 && pageInputValue < 605) {
        message = 'If you read  ' + pageInputValue + ' page(s) a day, you will complete it in about ' + niceResult + ' days.'
    }
    // output the result on the card
    resultArea.innerHTML = message
}

function calculatePagesNeeded(){
    // get the value from the input field

    const dayInputElement = document.getElementById('first_name3')
    const dayInputValue = dayInputElement.value
    console.log(dayInputValue)
    //  const pageInputValue = document.getElementById('first_name2').value //


    // use formula to find page needed
    let total = 604
    let result = total / dayInputValue
    const niceResult = result.toFixed(2)
    console.log('result', result)

    // get the element of the card
    const resultArea = document.getElementById('result1')
    let message = 'Please input a valid number of pages'

    if (dayInputValue && dayInputValue > 0) {
        message = 'If you want to khatam the Quran in  ' + dayInputValue + ' day(s), you will have to read about ' + niceResult + ' pages daily.'
    }
    // output the result on the card
    resultArea.innerHTML = message
}