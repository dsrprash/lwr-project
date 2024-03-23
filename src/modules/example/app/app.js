import { LightningElement } from 'lwc';
import { getTiles } from './tiles';

export default class HelloWorldApp extends LightningElement {

    tiles = getTiles();

    handleClick(event){
        let orgUrl = event.currentTarget.dataset.orgurl;
        console.log('url ==> '+orgUrl);
        window.location = orgUrl;
    }

}
