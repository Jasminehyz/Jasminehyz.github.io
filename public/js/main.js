$(function() {
	var bannerSlider = new Slider($('#slide'), {
		time: 5000,
		delay: 400,
		event: 'hover',
		auto: true,
		mode: 'fade',
		controller: $('#bannerCtrl'),
		activeControllerCls: 'on'
	});
})
