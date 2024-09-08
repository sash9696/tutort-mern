import jwt from 'jsonwebtoken';

export const authMiddleware = (req, res, next) => {
    // console.log('headers',req.headers )

    console.log('authorization: ',req.headers['authorization']?.split(' '))
    const token = req.headers['authorization']?.split(' ')[1];
    // const token = req.headers['authorization'];

    if(!token) return res.status(401).json({
        message:'No token provided'
    });
    try {
        //decode the token
        const decoded  = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
        
    } catch (error) {
        res.status(403).json({
            message:'Invalid token'
        });
    }

}