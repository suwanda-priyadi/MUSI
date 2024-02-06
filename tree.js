function getMetaData() {
// keterangan ada di bagian bawah.

    var tree = {
        questions: [
            {
                // pertanyaan 1,
				questionText:"Berapa variabel dependen pada penelitian Anda?",
                answers:{
                    "0":["Satu","Dua atau lebih"]
                }
            },
            {
                // pertanyaan 2,
				questionText:"Apa jenis variabel dependennya?",
                answers:{
                    "01":["Kontinu","Kategorikal"],
                    "02":["Kontinu"]
                }
            },
            {
                // pertanyaan 3,
				questionText:"Berapa variabel independen pada penelitian Anda?",
                answers:{
                    "011":["Satu","Dua atau lebih"],
                    "012":["Satu","Dua atau lebih"],
                    "021":["Satu","Dua atau lebih"]
                }
            },
			{
                // pertanyaan 4,
				questionText:"Apa jenis variabel independenya?",
                answers:{
                    "0111":["Kategorikal","Kontinu"],
                    "0112":["Kategorikal","Kontinu","Keduanya"],
                    "0121":["Kategorikal","Kontinu"],
                    "0122":["Kategorikal","Kontinu","Keduanya"],
					"0211":["Kategorikal"],
					"0212":["Kategorikal","Keduanya"]
                }
            },
			{
                // pertanyaan 5,
				questionText:"Jika variabel kategorikal, berapa banyak kategorinya?",
                answers:{
                    "01111":["Dua","Lebih dari dua"],
                    "01112":[],
                    "01121":[],
                    "01122":[],
                    "01123":[],
                    "01211":[],
                    "01212":[],
                    "01221":[],
                    "01222":[],
                    "01223":[],
                    "02111":[],
                    "02121":[],
                    "02122":[]
                }
            },
			{
                // pertanyaan 6,
				questionText:"jika variabel independennya kategorikal, apakah setiap kategori berasal dari sampel yang sama atau tidak?",
                answers:{
                    "011111":["Tidak sama","Sama"],
                    "011112":["Tidak sama","Sama"],
                    "011120":["Ya"],
                    "011210":["Tidak sama","Sama","Keduanya"],
                    "011220":[],
                    "011230":[],
                    "012110":["Tidak sama"],
                    "012120":[],
                    "012210":["Tidak sama"],
                    "012220":[],
                    "012230":["Tidak sama"],
                    "021110":[],
                    "021210":[],
                    "021220":[]
                }
            },
			{
                // pertanyaan 7,
				questionText:"Apakah data Anda memenuhi asumsi uji statistika parametrik?",
                answers:{
                    "0111111":["Ya","Tidak"],
                    "0111112":["Ya","Tidak"],
                    "0111121":["Ya","Tidak"],
                    "0111122":["Ya","Tidak"],
                    "0111201":["Ya","Tidak"],
                    "0112101":["Ya"],
                    "0112102":["Ya"],
                    "0112103":["Ya"],
                    "0112200":["Ya"],
                    "0112300":["Ya"],
                    "0121101":[],
                    "0121200":[],
                    "0122101":[],
                    "0122200":[],
                    "0122301":[],
                    "0211100":["Ya"],
                    "0212100":["Ya"],
                    "0212200":["Ya"]
                }
            }

        ],
        results: {
            "01111111":"Anda sebaiknya menggunakan Independent t-test atau Point-Biserial Correlation",
            "01111112":"Anda sebaiknya menggunakan Mann-Whitney Test",
            "01111121":"Anda sebaiknya menggunakan Dependent t-test",
            "01111122":"Anda sebaiknya menggunakan Wilcoxon Matched-Pairs Test",
			"01111211":"Anda sebaiknya menggunakan One Way independent ANOVA",
			"01111212":"Anda sebaiknya menggunakan Kruskal-Wallis Test",
			"01111221":"Anda sebaiknya menggunakan One Way Repeated Measures ANOVA",
			"01111222":"Anda sebaiknya menggunakan Friedman’s ANOVA",
			"01112011":"Anda sebaiknya menggunakan Pearson Correlation atau Regression",
			"01112012":"Anda sebaiknya menggunakan Spearman Correlation atau Kendall’s Tau",
			"01121011":"Anda sebaiknya menggunakan Independent Factorial ANOVA atau Multiple Regression",
			"01121021":"Anda sebaiknya menggunakan Factorial Repeated Measures ANOVA",
			"01121031":"Anda sebaiknya menggunakan Factorial Mixed ANOVA",
			"01122001":"Anda sebaiknya menggunakan Multiple Regression analysis",
			"01123001":"Anda sebaiknya menggunakan Multiple Regression atau ANCOVA",
			"01211010":"Anda sebaiknya menggunakan Pearson Chi-Square atau Likelihood Ratio",
			"01212000":"Anda sebaiknya menggunakan Logistic Regression atau Biserial/Point-Biserial Correlation",
			"01221010":"Anda sebaiknya menggunakan Loglinear Analysis",
			"01222000":"Anda sebaiknya menggunakan Logistic Regression",
			"01223010":"Anda sebaiknya menggunakan Logistic Regression",
			"02111001":"Anda sebaiknya menggunakan MANOVA",
			"02121001":"Anda sebaiknya menggunakan Factorial MANOVA",
			"02122001":"Anda sebaiknya menggunakan MANCOVA"
        }
    };
    return tree;
}



    /* Catatan
	meta data tree.js: 2 keys:
    1) questions - array of questions with list of possible answers (0 to 3) for every question depending on previous answers path.
    First step Path (string of Answer Numbers) for everyone = 0, and 2 answer buttons to show.
    Second step added Answer Number of previous question to path.
    Depending on what you clicked it can be "01" (if you clicked "One" or "02" if you clicked "Two or more").
    Depending on Path "01" or "02" you get different possible answers to current question - Array of answers ["Continuous","Categorical"].
    If any question should not be shown for particular path it has empty Array of answers [].
    If for this particular path previous question was not shown we set for that question Answer number 0 and add it to Path
    for ex. Path "0122101" means user answered 1 option to the Question 1, than 2nd option to Question 2, 2 - Question 3,
    1 - Question4, Question5 was not shown, 1 - Question6;
    2) results - list of keys-possible Paths with values - result of decision tree. */
