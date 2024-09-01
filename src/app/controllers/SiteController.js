const Course = require("../models/Course");
const Thpt_2024 = require("../models/Thpt_2024");
const fs = require("fs");
const pdfParse = require("pdf-parse");

const { multiMongooseToObject } = require("../../util/mongoose");

const pdfPath = "src/pdf/Doraemon35.pdf";
class SiteController {
    //GET /
    home(req, res, next) {
        res.render("home", { title: "Web của Hiesu" });
    }
    //GET
    thpt_2024(req, res, next) {
        Thpt_2024.findOne({ sbd: "10000001" })
            .then((data_thpt) => {
                res.render("home");
                console.log(data_thpt);
            })
            .catch(next);
    }

    //GET /search
    search(req, res) {
        res.render("search");
    }
}

module.exports = new SiteController();
