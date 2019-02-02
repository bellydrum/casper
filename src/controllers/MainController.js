import MainService from '../services/MainService'

export default class MainController {

    static greet(req, res) {
        return MainService.greet(req, res)
    }

}