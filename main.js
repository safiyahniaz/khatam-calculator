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