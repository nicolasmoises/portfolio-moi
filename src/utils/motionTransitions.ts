export const transitionVariablePage = {
    initial:{
        x: "100%",
        with:"100%"
    },
    animate:{
        x: "0%",
        with:"0%"
    },
    exit:{
        x: ["0%", "100%"],
        with:["0%", "100%"]
    }
};

export const motionTransitionAbout = {
    initial:{
        opacity:0,
        bottom: "5rem",
        transform:"translateY(200px)"
    },
    transition:{
        duration: 2.3,
        type:"tween",
        ease: [0.25,0.6,0.3,0.8]
    },
    animate:{
        opacity: 1,
        transform:"translateY(0px)"
    },


}
export const fadeIN = (direccion:string, delay:number) =>{
    return {
        hidden: {
            y:direccion === 'up' ? 80 : direccion === 'down' ? -80 : 0,
            opacity: 0,
            x:direccion === 'left' ? 80 : direccion === 'right' ? -80 : 0,
            transition:{
                type:"tween",
                duration: 1.5,
                ease: [0.25,0.6,0.3,0.8]
        }
    },
    show:{
        y:0,
        x:0,
        opacity:1,
        transition:{
            type:"tween",
            duration: 1.4,
            delay:delay,
            ease: [0.25,0.6,0.3,0.8] 
        }
    }
}
}