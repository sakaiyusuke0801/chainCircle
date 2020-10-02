// シーン
let MainScene = sGame.createScene('MainScene');
MainScene.setUpdate(
    function (scene, gTouchOn, gTouchOnOff, gTouchX, gTouchY, gTouchMoveX, gTouchMoveY, gTouchOffX, gTouchOffY) {
        // シーンがタッチされたら
        if (gTouchOnOff) {
            // ワールド非依存
            // 自分自身がタッチされたら
            //if(this.isHit(gTouchOffX, gTouchOffY, 1, 1)){
            //}
            // ターゲットデモと触れているかの判定
            //if(this.isHitDemo(/*scene.demo["target"]*/){	
            //}
            // ワールド依存
            // 自分自身がタッチされたら
            //if (this.existWorldPoint(scene, gTouchOffX, gTouchOffY)) {
            //}
            // ターゲットデモと触れているかの判定
            //if(this.contactDemoInWorld(scene, /*scene.demo["target"]*/)){
            //}
        }
    }
);

// リソース
let res = sGame.createResouce('res', { 'pass': 'res/pass' });
// データ
let data = {
    // スコア
    'score': '70',    
    // 出現しているボールの個数
    'num': '0',
    // タッチしているボール名
    'tc_name': 'none',
};

// 背景
let bg = sGame.createRectDemo('bg', { 'res': 'null', 'size': { 'w': '360', 'h': '640' }, 'pos': { 'x': '180', 'y': '320' }, 'scale': { 'x': '1', 'y': '1' }, 'alpha': '1', 'angle': '0', 'wp': { 'onWorld': 'false', 'fixedRotation': 'false', 'density': '1.0', 'friction': '0.5', 'restitution': '0.5', 'bodytype': '0' }, 'shape': { 'color': '#ffffff', 'fill': 'true', 'line': '5' } });
bg.setUpdate(
    function (scene, gTouchOn, gTouchOnOff, gTouchX, gTouchY, gTouchMoveX, gTouchMoveY, gTouchOffX, gTouchOffY) {
        // シーンがタッチされたら
        if (gTouchOnOff) {
            // ワールド非依存
            // 自分自身がタッチされたら
            //if(this.isHit(gTouchOffX, gTouchOffY, 1, 1)){
            //}
            // ターゲットデモと触れているかの判定
            //if(this.isHitDemo(/*scene.demo["target"]*/){	
            //}
            // ワールド依存
            // 自分自身がタッチされたら
            //if (this.existWorldPoint(scene, gTouchOffX, gTouchOffY)) {
            //}
            // ターゲットデモと触れているかの判定
            //if(this.contactDemoInWorld(scene, /*scene.demo["target"]*/)){
            //}
        }
    }
);
// 壁たち
let top_wall = sGame.createRectDemo('top_wall', { 'res': 'null', 'size': { 'w': '360', 'h': '1' }, 'pos': { 'x': '180', 'y': '1' }, 'scale': { 'x': '1', 'y': '1' }, 'alpha': '1', 'angle': '0', 'wp': { 'onWorld': 'true', 'fixedRotation': 'true', 'density': '1.0', 'friction': '0.5', 'restitution': '0.5', 'bodytype': '0' }, 'shape': { 'color': '#000000', 'fill': 'true', 'line': '1' } });
top_wall.setUpdate(
    function (scene, gTouchOn, gTouchOnOff, gTouchX, gTouchY, gTouchMoveX, gTouchMoveY, gTouchOffX, gTouchOffY) {
        // シーンがタッチされたら
        if (gTouchOnOff) {
            // ワールド非依存
            // 自分自身がタッチされたら
            //if(this.isHit(gTouchOffX, gTouchOffY, 1, 1)){
            //}
            // ターゲットデモと触れているかの判定
            //if(this.isHitDemo(/*scene.demo["target"]*/){	
            //}
            // ワールド依存
            // 自分自身がタッチされたら
            //if (this.existWorldPoint(scene, gTouchOffX, gTouchOffY)) {
            //}
            // ターゲットデモと触れているかの判定
            //if(this.contactDemoInWorld(scene, /*scene.demo["target"]*/)){
            //}
        }
    }
);
let right_wall = sGame.createRectDemo('right_wall', { 'res': 'null', 'size': { 'w': '1', 'h': '640' }, 'pos': { 'x': '359', 'y': '320' }, 'scale': { 'x': '1', 'y': '1' }, 'alpha': '1', 'angle': '0', 'wp': { 'onWorld': 'true', 'fixedRotation': 'true', 'density': '1.0', 'friction': '0.5', 'restitution': '0.5', 'bodytype': '0' }, 'shape': { 'color': '#000000', 'fill': 'true', 'line': '1' } });
right_wall.setUpdate(
    function (scene, gTouchOn, gTouchOnOff, gTouchX, gTouchY, gTouchMoveX, gTouchMoveY, gTouchOffX, gTouchOffY) {
        // シーンがタッチされたら
        if (gTouchOnOff) {
            // ワールド非依存
            // 自分自身がタッチされたら
            //if(this.isHit(gTouchOffX, gTouchOffY, 1, 1)){
            //}
            // ターゲットデモと触れているかの判定
            //if(this.isHitDemo(/*scene.demo["target"]*/){	
            //}
            // ワールド依存
            // 自分自身がタッチされたら
            //if (this.existWorldPoint(scene, gTouchOffX, gTouchOffY)) {
            //}
            // ターゲットデモと触れているかの判定
            //if(this.contactDemoInWorld(scene, /*scene.demo["target"]*/)){
            //}
        }
    }
);
let bottom_wall = sGame.createRectDemo('bottom_wall', { 'res': 'null', 'size': { 'w': '360', 'h': '1' }, 'pos': { 'x': '180', 'y': '639' }, 'scale': { 'x': '1', 'y': '1' }, 'alpha': '1', 'angle': '0', 'wp': { 'onWorld': 'true', 'fixedRotation': 'true', 'density': '1.0', 'friction': '0.5', 'restitution': '0.5', 'bodytype': '0' }, 'shape': { 'color': '#000000', 'fill': 'true', 'line': '1' } });
bottom_wall.setUpdate(
    function (scene, gTouchOn, gTouchOnOff, gTouchX, gTouchY, gTouchMoveX, gTouchMoveY, gTouchOffX, gTouchOffY) {
        // シーンがタッチされたら
        if (gTouchOnOff) {
            // ワールド非依存
            // 自分自身がタッチされたら
            //if(this.isHit(gTouchOffX, gTouchOffY, 1, 1)){
            //}
            // ターゲットデモと触れているかの判定
            //if(this.isHitDemo(/*scene.demo["target"]*/){	
            //}
            // ワールド依存
            // 自分自身がタッチされたら
            //if (this.existWorldPoint(scene, gTouchOffX, gTouchOffY)) {
            //}
            // ターゲットデモと触れているかの判定
            //if(this.contactDemoInWorld(scene, /*scene.demo["target"]*/)){
            //}
        }
    }
);
let left_wall = sGame.createRectDemo('left_wall', { 'res': 'null', 'size': { 'w': '1', 'h': '640' }, 'pos': { 'x': '1', 'y': '320' }, 'scale': { 'x': '1', 'y': '1' }, 'alpha': '1', 'angle': '0', 'wp': { 'onWorld': 'true', 'fixedRotation': 'true', 'density': '1.0', 'friction': '0.5', 'restitution': '0.5', 'bodytype': '0' }, 'shape': { 'color': '#000000', 'fill': 'true', 'line': '1' } });
left_wall.setUpdate(
    function (scene, gTouchOn, gTouchOnOff, gTouchX, gTouchY, gTouchMoveX, gTouchMoveY, gTouchOffX, gTouchOffY) {
        // シーンがタッチされたら
        if (gTouchOnOff) {
            // ワールド非依存
            // 自分自身がタッチされたら
            //if(this.isHit(gTouchOffX, gTouchOffY, 1, 1)){
            //}
            // ターゲットデモと触れているかの判定
            //if(this.isHitDemo(/*scene.demo["target"]*/){	
            //}
            // ワールド依存
            // 自分自身がタッチされたら
            //if (this.existWorldPoint(scene, gTouchOffX, gTouchOffY)) {
            //}
            // ターゲットデモと触れているかの判定
            //if(this.contactDemoInWorld(scene, /*scene.demo["target"]*/)){
            //}
        }
    }
);

// ボール
let ball = sGame.createCircleDemo('ball', { 'res': 'null', 'size': { 'w': '360', 'h': '640' }, 'pos': { 'x': '180', 'y': '320' }, 'scale': { 'x': '1', 'y': '1' }, 'alpha': '1', 'angle': '0', 'wp': { 'onWorld': 'true', 'fixedRotation': 'false', 'density': '1.0', 'friction': '0.5', 'restitution': '0.5', 'bodytype': '2' }, 'r': '50', 'shape': { 'color': '#00ee00', 'fill': 'false', 'line': '5' } });
ball.setUpdate(
    function (scene, gTouchOn, gTouchOnOff, gTouchX, gTouchY, gTouchMoveX, gTouchMoveY, gTouchOffX, gTouchOffY) {
        // シーンがタッチされたら
        if (gTouchOn) {
            // ワールド非依存
            // 自分自身がタッチされたら
            //if(this.isHit(gTouchOffX, gTouchOffY, 1, 1)){
            //}
            // ターゲットデモと触れているかの判定
            //if(this.isHitDemo(/*scene.demo["target"]*/){	
            //}
            // ワールド依存
            // 自分自身がタッチされたら
            if (this.existWorldPoint(scene, gTouchX, gTouchY)) {
                // 未タッチ
                if (scene.data["tc_name"] == "none") {
                    // タッチ済に自身の名前を格納
                    scene.data["tc_name"] = this.name;
                }
            }
            // 自分がタッチ中なら移動
            if (scene.data["tc_name"] == this.name) {
                // なぞった方向に力を加える
                this.bodyApplyForce(gTouchMoveX, gTouchMoveY, this.pos.x, this.pos.y);
            }
            // ターゲットデモと触れているかの判定
            //if(this.contactDemoInWorld(scene, /*scene.demo["target"]*/)){
            //}
        }
        // 離されたとき
        if (gTouchOnOff) {
            // 自分がタッチ中だったなら移動
            if (scene.data["tc_name"] == this.name) {
                scene.data["tc_name"] = "none";

                // ポップスコア
                scene.addDemo(popscore(this.pos.x, this.pos.y));
                // このデモ削除
                scene.delDemo(this.name);
            }
        }
    }
);
// スコア文字
let score = sGame.createFontDemo('score',{'res': 'null', 'size': {'w': '100', 'h': '30'}, 'pos': {'x': '50', 'y': '20'}, 'scale': {'x': '1', 'y': '1'}, 'alpha': '1', 'angle': '0', 'wp': {'onWorld': 'false', 'fixedRotation': 'false', 'density': '1.0', 'friction': '0.5', 'restitution': '0.5', 'bodytype': '0'}, 'text': 'score', 'color': '#333333'});
score.setUpdate(
    function (scene, gTouchOn, gTouchOnOff, gTouchX, gTouchY, gTouchMoveX, gTouchMoveY, gTouchOffX, gTouchOffY) {
        // シーンがタッチされたら
        if (gTouchOnOff) {
			// ワールド非依存
			// 自分自身がタッチされたら
			//if(this.isHit(gTouchOffX, gTouchOffY, 1, 1)){
			//}
			// ターゲットデモと触れているかの判定
			//if(this.isHitDemo(/*scene.demo["target"]*/){	
			//}
			// ワールド依存
            // 自分自身がタッチされたら
            //if (this.existWorldPoint(scene, gTouchOffX, gTouchOffY)) {
            //}
            // ターゲットデモと触れているかの判定
            //if(this.contactDemoInWorld(scene, /*scene.demo["target"]*/)){
            //}
        }
    }
);
// スコア
let scorepoint = sGame.createFontRightDemo('scorepoint',{'res': 'null', 'size': {'w': '300', 'h': '50'}, 'pos': {'x': '340', 'y': '30'}, 'scale': {'x': '1', 'y': '1'}, 'alpha': '1', 'angle': '0', 'wp': {'onWorld': 'false', 'fixedRotation': 'false', 'density': '1.0', 'friction': '0.5', 'restitution': '0.5', 'bodytype': '0'}, 'text': '0', 'color': '#333333'});
scorepoint.setUpdate(
    function (scene, gTouchOn, gTouchOnOff, gTouchX, gTouchY, gTouchMoveX, gTouchMoveY, gTouchOffX, gTouchOffY) {
        // 点数を更新
        this.text = scene.data["score"];
    }
);
// 点数出現時
let popscore = function(x, y){
    let ret = sGame.createFontDemo('popscore',{'res': 'null', 'size': {'w': '100', 'h': '30'}, 'pos': {'x': x, 'y': y}, 'scale': {'x': '1', 'y': '1'}, 'alpha': '1', 'angle': '0', 'wp': {'onWorld': 'false', 'fixedRotation': 'false', 'density': '1.0', 'friction': '0.5', 'restitution': '0.5', 'bodytype': '0'}, 'text': '10', 'color': '#333333'});
    ret.setUpdate(
        function (scene, gTouchOn, gTouchOnOff, gTouchX, gTouchY, gTouchMoveX, gTouchMoveY, gTouchOffX, gTouchOffY) {
            // 初回
            if(!this.started){
                scene.data[this.name + "_popscore_frame"] = 20;
            }
            // ポップするフレームが残っている
            if(scene.data[this.name + "_popscore_frame"] > 0){
                // 点滅
                if(this.alpha == 1){
                    this.alpha = 0;
                }else{
                    this.alpha = 1;
                }
                // 拡大
                this.size.w += 1;
                this.size.h += 1;
                // デクリメント
                scene.data[this.name + "_popscore_frame"] -= 1;
            }
            // ０以下ならプロパティもデモも削除
            else{
                scene.delDemo(this.name);
                delete scene.data[this.name + "_popscore_frame"];
            }
        }
    );
    return ret;
};

MainScene.setRes(res);
MainScene.setData(data);
MainScene.addDemo(bg);
MainScene.addDemo(top_wall);
MainScene.addDemo(right_wall);
MainScene.addDemo(bottom_wall);
MainScene.addDemo(left_wall);
MainScene.addDemo(ball);
MainScene.addDemo(score);
MainScene.addDemo(scorepoint);

MainScene.worldOn(0);
sGame.pushScene(MainScene);
