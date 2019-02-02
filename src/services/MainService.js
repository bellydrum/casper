export default class MainService {

    /**
     *
     * @param req
     * @param res
     * @about returns a temporary greeting
     */
    static greet(req, res) {
        res.send("Hey from bellydrum! /swagger page coming soon.")
    }

}