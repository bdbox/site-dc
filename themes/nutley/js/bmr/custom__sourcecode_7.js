var h, w, age, bmr, isMetric = false,
    isMale = false;

(function ($) {

    $(document).ready(function () {

        //radio buttons
        $("input:radio[name='radio1']").each(function (n) {
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
        $("input:radio[name='radio2']").each(function (n) {
            $(this).click(function () {
                if (n == 0) {
                    isMale = true;
                } else {
                    isMale = false;
                }
            });
        });

        //
        $("#calculateBtn").bind("click", function () {
            getData();
            calculate();
            doReport();
        });

        //on page load
        getData();
        calculate();
        doReport();

    }); //ready

    function getData() {
        if (isMetric) {
            h = parseFloat($("#txtHeightMetric").val());
            w = parseFloat($("#txtWeightMetric").val());
        } else {
            h = parseFloat($("#txtHeightFoot").val()) * 12 + parseFloat($("#txtHeightInch").val());
            w = parseFloat($("#txtWeightPound").val());

        }
        age = parseFloat($("#txtAge").val());
    }

    function calculate() {
        if (isMetric) {
            if (isMale) {
                bmr = 66.5 + 13.75 * w + 5.003 * h - 6.755 * age;
            } else {
                bmr = 655.1 + 9.563 * w + 1.85 * h - 4.676 * age;
            }
        } else {
            if (isMale) {
                bmr = 66 + (6.2 * w) + (12.7 * h) - (6.76 * age);
            } else {
                bmr = 655 + (4.35 * w) + (4.7 * h) - (4.7 * age);
            }
        }
        $("#txtAnswer").val(addCommas(bmr.toFixed(0).toString()));
    }

    //
    function doReport() {
        var reportStr = "";
        var roiStr = "";

        reportStr += "<tr><td class='lt'>The BMR(Basal Metabolic Rate) is " + addCommas(bmr.toFixed(0).toString()) + ".";

        reportStr += "</td></tr>";
        $("table.mortgageTable tbody:first").html("").append(reportStr);

    }


})(jQuery);