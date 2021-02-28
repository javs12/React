const budgetReview = (budget, remaning) => {
    let className;
    if ((budget / 4) > remaning) {
        className = 'alert alert-danger';
    } else if ((budget / 2) > remaning) {
        className = 'alert alert-warning';
    } else {
        className = 'alert alert-success';
    }

    return className;
};


module.exports = {
    budgetReview
};
