// 클래스 

class House {
    constructor (year,name,window){
        this.year = year;
        this.name = name;
        this.window = window;
    }
    getAge(){
        console.log(`${this.name}는 건축한지 ${2024 - this.year}년 되었어요! `);
    } 
    getWindow(){
        console.log(`${this.name}의 창문은 ${this.window}개 입니다!`);
    }

}

const house1 = new House(1990, '롯데', 1);  // 클래스를 이용해서 인스턴스를 생성시 Constructor에 선언된 매개변수대로 값을 지정해야한다.

class Apartment extends House {
    constructor(year,name,window,floor, windowMaker){
        super(year,name,window)
        this.floor = floor;
        this.windowMaker = windowMaker;
    }
    getAptInfo() {
        return  `${this.year}년에 지어진 ${this.name} 아파트의 총 층수는 ${this.floor}이며, 창문의 개수는 ${this.window}이다.`;
    }

    // override(오버라이드) 부모의 메소드와 같은 함수를 재정의 할때 사용 -> 부모의 메서드의 이름과 같은 메서드이지만 재정의 되어 다른 함수로 사용한다.
    
}

const apt1 = new Apartment(2022, '래미안', 3,20,'KCC');
console.log(apt1);
console.log(apt1.getAptInfo());