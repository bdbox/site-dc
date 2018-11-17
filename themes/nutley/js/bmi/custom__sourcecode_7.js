var h, w, bmi, isMetric = false;

(function ($) {


    $(document).ready(function () {

        //radio buttons
        $(":radio").each(function (n) {
            $(this).click(function () {
                if (n == 0) {
                    $("#metricDiv").removeClass("hide");
                    $("#imperialDiv").addClass("hide");
                    isMetric = true;
                } else {
                    $("#imperialDiv").removeClass("hide");
                    $("#metricDiv").addClass("hide");
                    isMetric = false;
                }
            });
        });

        //
        $("#calculateBtn").bind("click", function () {
            getData();
            calculate();
            doReport();
            $('#bmi-meter').speedometer({
                percentage: bmi || 0
            });
        });

        //on page load
        getData();
        calculate();
        doReport();

        $('#bmi-meter').speedometer();

    }); //ready

    function getData() {
        if (isMetric) {
            h = parseFloat($("#txtHeightMetric").val()) / 100;
            w = parseFloat($("#txtWeightMetric").val());
        } else {
            h = parseFloat($("#txtHeightFoot").val()) * 12 + parseFloat($("#txtHeightInch").val());
            w = parseFloat($("#txtWeightPound").val());

        }
    }

    function calculate() {
        if (isMetric)
            bmi = Math.round(w / (h * h));
        else
            bmi = Math.round((w * 703) / (h * h));
    }

    //
    function doReport() {
        var reportStr = "";
        var roiStr = "";

        reportStr += "<tr><td class='lt'>The BMI(Body Mass Index) is " + bmi + "<br>Your body is at ";
        if (bmi <= 18.5)
            reportStr += "<b>underweight</b>.";
        if (bmi > 18.5 && bmi <= 24.9)
            reportStr += "<b>normal weight. Congratulations!</b>";
        if (bmi > 25 && bmi <= 29.9)
            reportStr += "<b>overweight</b>.";
        if (bmi > 30)
            reportStr += "<b>obesity</b>.";

        reportStr += "</td></tr>";
        $("table.mortgageTable tbody:first").html("").append(reportStr);

    }


})(jQuery);