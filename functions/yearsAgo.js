export default yearsAgo = year => {
    let givenDate = new Date();
    let userYear = givenDate.getFullYear();
    let yearsDiff = userYear - year;
    return yearsDiff;
}