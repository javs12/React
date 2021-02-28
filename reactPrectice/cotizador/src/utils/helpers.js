
const getDifference = (year) => {
    return new Date().getFullYear() - year;
};

const calculatedBrand = (brand) => {
    let increase;
    switch(brand) {
        case 'europeo':
            increase = 1.30;
            break;
        case 'americano':
            increase = 1.15;
            break;
        case 'asiatico':
            increase = 1.05;
            break;
        default:
            break;
    }

    return increase;
};

const getPlan = (plan) => {
    return (plan === 'basico' ? 1.20 : 1.50);
}

module.exports = {
    getDifference,
    calculatedBrand,
    getPlan,
};
