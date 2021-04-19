$(document).ready(function ()
{
    $("form").on("submit",calculation);
});

function calculation()
{
    event.preventDefault();

    //Gather information from the user

    let height = parseInt( $("#height").val() );
    let weight = parseInt( $("#weight").val() );

    //calculate there BMI

    let heightMeters = height / 39.37;
    let weightKilo = weight / 2.205;

    let BMI = (weightKilo / (heightMeters * heightMeters));

    //use an if-else-if to find the category

    let category;

    if(BMI < 15 )
    {
        category = "Very severely underweight";
    }
    else if(BMI < 16)
    {
        category = "Severely underweight";
    }
    else if(BMI < 18.5)
    {
        category = "Underweight";
    }
    else if(BMI < 25)
    {
        category = "Normal (Healthy Weight)";
    }
    else if(BMI < 30)
    {
        category = "Overweight";
    }
    else if(BMI < 35)
    {
        category = "Obese Class I (Moderately obese)";
    }
    else if(BMI < 40)
    {
        category = "Obese Class II (Severely obese)";
    }
    else if(BMI > 40)
    {
        category = "Obese Class III (Very severely obese)";
    }

    $("p#output").text("Your BMI is " + BMI.toFixed(1) + ", You are " + category + ".");

    //output the result


}
