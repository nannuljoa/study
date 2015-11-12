(function ($) {

	function SpinBox(obj){
		this.btnMinus = obj.find('.btn-minus');
		this.btnPlus = obj.find('.btn-plus');
		this.inputBox = obj.find('input');

		this._addEvent (this.btnPlus, 'click', this._plus, this);
		this._addEvent (this.btnMinus, 'click', this._minus, this);
	} //1

	SpinBox.prototype = {
		_plus : function(){
			this.inputBox.val(+this.inputBox.val() + 1);
		},
		_minus : function(){
			this.inputBox.val( +this.inputBox.val()-1 > 0 ? +this.inputBox.val()-1 : 0);
		},
		_addEvent : function(element, type, fn, scope){
			element.on(type, function(e){
				fn.call(scope, e);
			});
		}
	}; //2

	$('.spin-box').each(function(){
		new SpinBox($(this));
	}); //3

}(window.jQuery));
// 즉시 실행 함수

/*

위 코드의 짜는 순서
: 

각 코드 안의 this의 의미, this가 가리키는 것은?
: 

키값에 _가 들어가는 이유
: 

each문에서 new SpinBox 호출 시 $(this)가 의미하는 것, 반드시 들어가야 하는가
: 

$(this)와 this의 차이
: 

*/