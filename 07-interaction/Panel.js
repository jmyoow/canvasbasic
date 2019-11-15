class Panel {
	constructor() {
		this.scale = 0.01;
		this.angle = 0;
	}

	draw() {
		context.fillStyle = 'rgba(255,0,0,0.8)';
		// 변환 초기화;
		context.resetTransform();
		// context.setTransform(1,0,0,1,0,0);
		context.translate(oX, oY);
		context.scale(this.scale, this.scale);
		context.rotate(canUtil.toRadian(this.angle));
		context.translate(-oX, -oY);
		context.fillRect(oX-150, oY-150, 300, 300);
		context.resetTransform();
	}

	showContent() {
		console.log('showContent 실행');
		context.fillStyle = '#fff';
		context.fillText(selectedBox.index, oX, oY);
	}
}