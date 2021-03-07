var commentBox = {
    methods: {
        hcbFunction(id, pge = '') {
            if (!window.hcb_user) { hcb_user = {}; }
            hcb_user.PAGE = pge;
            (function () {
                var s = document.createElement("script"),
                    l = hcb_user.PAGE || ("" + window.location).replace(/'/g, "%27"),
                    h = "https://www.htmlcommentbox.com";
                s.setAttribute("id", "hcb-script-" + id);
                s.setAttribute("type", "application/javascript");
                s.setAttribute("src", h + "/jread?page=" + encodeURIComponent(l).replace("+", "%2B") + "&mod=%241%24wq1rdBcg%24CKnAuHuwa6v1%2FPeVJz3UF%2F" + "&opts=16862&num=20&ts=1614062288781");
                if (typeof s != "undefined")
                    document.getElementsByTagName("head")[0].appendChild(s);
            })();
            //<script type="application/javascript" src="https://www.htmlcommentbox.com/jread?page=https%3A%2F%2Fayrlin-renata.github.io%2Favra%2Fhtml%2Fstories.html&mod=%241%24wq1rdBcg%24CKnAuHuwa6v1%2FPeVJz3UF%2F&opts=16862&num=20&ts=1614062288781"></script>
        },
    }
}