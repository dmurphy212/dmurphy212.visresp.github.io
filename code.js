var lines, markov;

$(document).ready(function () {

  markov = new RiMarkov(2);

  RiTa.loadString('data/stein.txt', function (data1) {
     RiTa.loadString('data/stein2.txt', function (data2) {
		  RiTa.loadString('data/stein3.txt', function (data3) {
			    RiTa.loadString('data/stein4.txt', function (data4) {
					  RiTa.loadString('data/stein5.txt', function (data5) {
       markov.loadText(data1);
       markov.loadText(data2);
	   markov.loadText(data3);
	   markov.loadText(data4);
	   markov.loadText(data5);
           });
         });
       });
     });
   });

  $('.textarea').text("click here");
  $('div').click(generate);
});

function generate() {

  if (!markov.ready()) return;

  lines = markov.generateSentences(10);

  $('.textarea').text(lines.join(' '));
  $('.textarea').css('align-items', 'stretch');
}
