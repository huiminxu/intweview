// https://www.bilibili.com/video/BV1vf4y1T7E6/?p=2&spm_id_from=pageDriver&vd_source=03c5ce5803ffa4c75754002214c86f37
class EventBus{
    constructor(){
        this.items={}
    }
    $emit(eventName,...args){
        if(!this.items[eventName]) return;
        this.items[eventName].forEach(cb(...args))
    }
    $on(eventName,cb){
       (this.items[eventName]||=[]).push(cb);
    }
    $off(){
        this.items[eventName] =[]
    }
}


export default EventBus;