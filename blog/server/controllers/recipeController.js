// Get home page 
exports.homepage = async(req,res) => {
    res.render('home', { title : 'Cooking Blog - Home'})
}