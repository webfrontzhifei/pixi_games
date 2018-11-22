import React, { Component } from 'react';
import { Application, Container, Sprite } from 'pixi.js';
import Punny from './assets/bunny.png';

class Demo1 extends Component {

    // pixi
    componentDidMount() {
        var app = new Application({
            width: document.documentElement.clientWidth || document.body.clientWidth,
            height: document.documentElement.clientHeight || document.body.clientHeight,
            backgroundColor: 0x1099bb
        });

        var bunny = new Sprite.fromImage(Punny);
        bunny.anchor.set(0.5);
        bunny.x = app.screen.width / 2;
        bunny.y = app.screen.height / 2;

        app.stage.addChild(bunny);

        app.ticker.add((delta) => {
            bunny.rotation += 0.1 * delta;
        })
        document.body.appendChild(app.view);
    }

    render() {
        return <div>pixi</div>
    }
}

export default Demo1;