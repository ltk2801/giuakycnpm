// @desc Get goals
// @route Get /api/goals
// @acces Private
const getGoals = (req,res) => {
    res.status(200).json({message:'Get goals'})
}

// @desc Set goals
// @route POST /api/goals
// @acces Private
const setGoal = (req,res) => {
    res.status(200).json({message:'Set goal'})
}

// @desc Update goal
// @route PUT /api/goals/:id
// @acces Private
const updateGoal = (req,res) => {
    res.status(200).json({message: `Update goal ${req.params.id}`})
}

// @desc Delete goals
// @route DELETE /api/goals/:id
// @acces Private
const deleteGoal = (req,res) => {
    res.status(200).json({message: `Delete goal ${req.params.id}`})
}

module.exports = {
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal,
}