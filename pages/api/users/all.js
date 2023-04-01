function AllUsers(req, res){
    res.status(200).json({
        users: [
            { name: 'Jane James' },
            { name: 'John Doe' }   
        ]     
    });
}

export default AllUsers;