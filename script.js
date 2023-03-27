const lights = [
    {
        id: 0,
        barsToLight: [1,2,3,5,6,7]
    },
    {
        id: 1,
        barsToLight: [2,5]
    },
    {
        id: 2,
        barsToLight: [1,2,4,6,7]
    },
    {
        id: 3,
        barsToLight: [1,2,4,5,7]
    },
    {
        id: 4,
        barsToLight: [2,3,4,5]
    },
    {
        id: 5,
        barsToLight: [1,3,4,5,7]
    },
    {
        id: 6,
        barsToLight: [1,3,4,5,6,7]
    },
    {
        id: 7,
        barsToLight: [1,2,5]
    },
    {
        id: 8,
        barsToLight: [1,2,3,4,5,6,7]
    },
    {
        id: 9,
        barsToLight: [1,2,3,4,5,7]
    }
];

const lightOn = (numSlot,currNum) => {
    numSlot = document.querySelectorAll(`${numSlot} .bar`);

    numSlot.forEach((bar) => {
        bar.classList.remove("light-on");
    });

    lights[currNum].barsToLight.forEach((num) => {
        numSlot[num - 1].classList.add("light-on");
    });
};

setInterval(() => {
    var now = new Date();

    var hour = now.getHours();
    var hourNum1 = Math.floor(hour/10);
    var hourNum2 = hour % 10;

    var min = now.getMinutes();
    var minNum1 = Math.floor(min/10);
    var minNum2 = min % 10;

    var sec = now.getSeconds();
    var secNum1 = Math.floor(sec/10);
    var secNum2 = sec % 10;

    lightOn(".hour.num-1",hourNum1);
    lightOn(".hour.num-2",hourNum2);

    lightOn(".minute.num-1",minNum1);
    lightOn(".minute.num-2",minNum2);

    lightOn(".second.num-1",secNum1);
    lightOn(".second.num-2",secNum2);
},1000);