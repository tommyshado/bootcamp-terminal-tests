export default year => {
    let givenDate = new Date();
    let userYear = givenDate.getFullYear();
    let yearsDiff = userYear - year;
    return yearsDiff;
}