exports.getAllUsers = (req, res)=>{
    res.status(200)
    res.json([
        {
            userName: "Idris",
            userAge: "20",
        },

        {
            userName: "Winnie",
            userAge: "26",  
        }
    ])
}


exports.getSingleUser = (req, res)=>{
    res.status(200)
    res.json({
        userName : "Idris",
        userAge : "20",
})
}

exports.createNewUser = (req, res)=>{
    res.status(200)
    res.json({
        message: "User created successfully"
    })
}

exports.updateAUser = (req, res)=>{
    res.status(200)
    res.json({
        message: "user updated successfully"
    })
}

exports.deleteAUser = (req, res)=>{
    res.status(200)
    res.json({
        message: "user deleted successfully"
    })
}