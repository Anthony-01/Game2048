
                function __extends(d, b) {
                    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
                        function __() {
                            this.constructor = d;
                        }
                    __.prototype = b.prototype;
                    d.prototype = new __();
                };
                window.generateEUI = {};
                generateEUI.paths = {};
                generateEUI.styles = undefined;
                generateEUI.skins = {"game.StartScene":"resource/skins/StartSkin.exml","game.GameView":"resource/skins/GameSkin.exml","myComponent.MyButton":"resource/skins/component/MyButton.exml","eui.Panel":"resource/skins/component/MyPanel.exml","eui.Button":"resource/skins/component/Button.exml","component.GameTimeHandle":"resource/skins/component/GameTimerSkin.exml","component.GridHandle":"resource/skins/component/GridSkin.exml"};generateEUI.paths['resource/skins/component/Button.exml'] = window.Button = (function (_super) {
	__extends(Button, _super);
	function Button() {
		_super.call(this);
		this.skinParts = ["labelDisplay","iconDisplay"];
		
		this.minHeight = 50;
		this.minWidth = 100;
		this.elementsContent = [this._Image1_i(),this.labelDisplay_i(),this.iconDisplay_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source","button_down_png")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
		];
	}
	var _proto = Button.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.source = "button_up_png";
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.bottom = 8;
		t.left = 8;
		t.right = 8;
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.top = 8;
		t.verticalAlign = "middle";
		return t;
	};
	_proto.iconDisplay_i = function () {
		var t = new eui.Image();
		this.iconDisplay = t;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		return t;
	};
	return Button;
})(eui.Skin);generateEUI.paths['resource/skins/component/GameTimerSkin.exml'] = window.GameTimerSkin = (function (_super) {
	__extends(GameTimerSkin, _super);
	function GameTimerSkin() {
		_super.call(this);
		this.skinParts = ["gameTime"];
		
		this.elementsContent = [this._Rect1_i(),this.gameTime_i()];
	}
	var _proto = GameTimerSkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xf4a922;
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.strokeColor = 0xf79f27;
		t.width = 20;
		return t;
	};
	_proto.gameTime_i = function () {
		var t = new eui.Label();
		this.gameTime = t;
		t.text = "GameTime: 15s";
		return t;
	};
	return GameTimerSkin;
})(eui.Skin);generateEUI.paths['resource/skins/component/GridSkin.exml'] = window.GridSkin = (function (_super) {
	__extends(GridSkin, _super);
	function GridSkin() {
		_super.call(this);
		this.skinParts = [];
		
		this.elementsContent = [this._Group1_i()];
	}
	var _proto = GridSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 555;
		t.width = 555;
		return t;
	};
	return GridSkin;
})(eui.Skin);generateEUI.paths['resource/skins/component/MyButton.exml'] = window.MyButton = (function (_super) {
	__extends(MyButton, _super);
	function MyButton() {
		_super.call(this);
		this.skinParts = ["btn_bg","btn_disabled"];
		
		this.elementsContent = [this.btn_bg_i(),this.btn_disabled_i(),this._Label1_i()];
		this.states = [
			new eui.State ("up",
				[
					new eui.SetProperty("btn_bg","source","button_json.play_normal")
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("btn_bg","source","button_json.play_down")
				])
			,
			new eui.State ("disabled",
				[
				])
		];
	}
	var _proto = MyButton.prototype;

	_proto.btn_bg_i = function () {
		var t = new eui.Image();
		this.btn_bg = t;
		t.scale9Grid = new egret.Rectangle(43,27,13,95);
		t.width = 286;
		return t;
	};
	_proto.btn_disabled_i = function () {
		var t = new eui.Image();
		this.btn_disabled = t;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.size = 50;
		t.text = "PLAY";
		t.textColor = 0x107ad1;
		t.verticalCenter = 0;
		t.x = 59;
		return t;
	};
	return MyButton;
})(eui.Skin);generateEUI.paths['resource/skins/component/MyPanel.exml'] = window.MyPanel = (function (_super) {
	__extends(MyPanel, _super);
	function MyPanel() {
		_super.call(this);
		this.skinParts = ["titleDisplay","moveArea","closeButton"];
		
		this.minHeight = 230;
		this.minWidth = 450;
		this.elementsContent = [this._Image1_i(),this.moveArea_i(),this.closeButton_i()];
	}
	var _proto = MyPanel.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(2,2,12,12);
		t.source = "border_png";
		t.top = 0;
		return t;
	};
	_proto.moveArea_i = function () {
		var t = new eui.Group();
		this.moveArea = t;
		t.height = 45;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this._Image2_i(),this.titleDisplay_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "header_png";
		t.top = 0;
		return t;
	};
	_proto.titleDisplay_i = function () {
		var t = new eui.Label();
		this.titleDisplay = t;
		t.fontFamily = "Tahoma";
		t.left = 15;
		t.right = 5;
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.verticalCenter = 0;
		t.wordWrap = false;
		return t;
	};
	_proto.closeButton_i = function () {
		var t = new eui.Button();
		this.closeButton = t;
		t.enabled = true;
		t.horizontalCenter = 0;
		t.label = "closeButton";
		t.skinName = "Button";
		t.y = 162;
		return t;
	};
	return MyPanel;
})(eui.Skin);generateEUI.paths['resource/skins/component/ReturnButton.exml'] = window.ReturnButton = (function (_super) {
	__extends(ReturnButton, _super);
	function ReturnButton() {
		_super.call(this);
		this.skinParts = [];
		
		this.elementsContent = [this._Image1_i()];
		this.states = [
			new eui.State ("up",
				[
					new eui.SetProperty("_Image1","source","return_normal")
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source","return_down")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","source","return_normal")
				])
		];
	}
	var _proto = ReturnButton.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		return t;
	};
	return ReturnButton;
})(eui.Skin);generateEUI.paths['resource/skins/GameSkin.exml'] = window.GameSkin = (function (_super) {
	__extends(GameSkin, _super);
	var GameSkin$Skin1 = 	(function (_super) {
		__extends(GameSkin$Skin1, _super);
		function GameSkin$Skin1() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = GameSkin$Skin1.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "custom_down";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return GameSkin$Skin1;
	})(eui.Skin);

	var GameSkin$Skin2 = 	(function (_super) {
		__extends(GameSkin$Skin2, _super);
		function GameSkin$Skin2() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = GameSkin$Skin2.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "custom_down";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return GameSkin$Skin2;
	})(eui.Skin);

	var GameSkin$Skin3 = 	(function (_super) {
		__extends(GameSkin$Skin3, _super);
		function GameSkin$Skin3() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = GameSkin$Skin3.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "custom_down";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return GameSkin$Skin3;
	})(eui.Skin);

	var GameSkin$Skin4 = 	(function (_super) {
		__extends(GameSkin$Skin4, _super);
		function GameSkin$Skin4() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = GameSkin$Skin4.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "custom_down";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return GameSkin$Skin4;
	})(eui.Skin);

	function GameSkin() {
		_super.call(this);
		this.skinParts = ["bg","score","btn_up","btn_down","btn_letf","btn_right","btn_return","gameTime","gridHandle"];
		
		this.elementsContent = [this._Image1_i(),this.bg_i(),this._Image2_i(),this.score_i(),this._Component1_i(),this.btn_up_i(),this.btn_down_i(),this.btn_letf_i(),this.btn_right_i(),this.btn_return_i(),this.gameTime_i(),this.gridHandle_i()];
	}
	var _proto = GameSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "gamePreview_png";
		t.visible = false;
		return t;
	};
	_proto.bg_i = function () {
		var t = new eui.Image();
		this.bg = t;
		t.source = "sence_background_png";
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "gamemenu_json.menubackground";
		t.visible = false;
		return t;
	};
	_proto.score_i = function () {
		var t = new eui.Label();
		this.score = t;
		t.bold = true;
		t.fontFamily = "DFKai-SB";
		t.horizontalCenter = 0;
		t.italic = true;
		t.size = 45;
		t.text = "0";
		t.textColor = 0x050000;
		t.y = 16;
		return t;
	};
	_proto._Component1_i = function () {
		var t = new eui.Component();
		t.x = 42;
		t.y = 120;
		return t;
	};
	_proto.btn_up_i = function () {
		var t = new eui.Button();
		this.btn_up = t;
		t.label = "上";
		t.x = 271;
		t.y = 717;
		t.skinName = GameSkin$Skin1;
		return t;
	};
	_proto.btn_down_i = function () {
		var t = new eui.Button();
		this.btn_down = t;
		t.label = "下";
		t.x = 271;
		t.y = 809;
		t.skinName = GameSkin$Skin2;
		return t;
	};
	_proto.btn_letf_i = function () {
		var t = new eui.Button();
		this.btn_letf = t;
		t.label = "左";
		t.x = 176;
		t.y = 759;
		t.skinName = GameSkin$Skin3;
		return t;
	};
	_proto.btn_right_i = function () {
		var t = new eui.Button();
		this.btn_right = t;
		t.label = "右";
		t.x = 365;
		t.y = 769;
		t.skinName = GameSkin$Skin4;
		return t;
	};
	_proto.btn_return_i = function () {
		var t = new eui.Button();
		this.btn_return = t;
		t.label = "Button";
		t.skinName = "ReturnButton";
		t.y = 8;
		return t;
	};
	_proto.gameTime_i = function () {
		var t = new component.GameTimeHandle();
		this.gameTime = t;
		t.enabled = true;
		t.horizontalCenter = 0;
		t.y = 66;
		return t;
	};
	_proto.gridHandle_i = function () {
		var t = new component.GridHandle();
		this.gridHandle = t;
		t.x = 42;
		t.y = 120;
		return t;
	};
	return GameSkin;
})(eui.Skin);generateEUI.paths['resource/skins/LoadingSkin.exml'] = window.LoadingSkin = (function (_super) {
	__extends(LoadingSkin, _super);
	function LoadingSkin() {
		_super.call(this);
		this.skinParts = [];
		
		this.height = 300;
		this.width = 400;
	}
	var _proto = LoadingSkin.prototype;

	return LoadingSkin;
})(eui.Skin);generateEUI.paths['resource/skins/StartSkin.exml'] = window.StartSkin = (function (_super) {
	__extends(StartSkin, _super);
	function StartSkin() {
		_super.call(this);
		this.skinParts = ["preview","btn_start"];
		
		this.elementsContent = [this.preview_i(),this._Image1_i(),this._Image2_i(),this.btn_start_i()];
	}
	var _proto = StartSkin.prototype;

	_proto.preview_i = function () {
		var t = new eui.Image();
		this.preview = t;
		t.source = "startPreview_png";
		t.visible = false;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "start_background_png";
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "start_logo_png";
		t.y = 23;
		return t;
	};
	_proto.btn_start_i = function () {
		var t = new myComponent.MyButton();
		this.btn_start = t;
		t.horizontalCenter = 0;
		t.y = 461;
		return t;
	};
	return StartSkin;
})(eui.Skin);