(function ($) {

	$('.spin-box').each(function (){
		var obj = $(this),
			btnMinus = obj.find('.btn-minus'),
			btnPlus = obj.find('.btn-plus'),
			input = obj.find('input');

		btnPlus.on('click', function(){
			input.val(+input.val() + 1);
		});

		btnMinus.on('click', function(){
			input.val(+input.val() - 1 > 0 ? +input.val() - 1 : 0);
		});
	});

}(window.jQuery));
// 즉시 실행 함수



// 식: 값이 있는것
// 문: 값이 없는것