{
     // Problem - 4
     
     type Circle = {
        shape: "circle";
        radius: number;
    };

    type Rectangle = {
        shape: "rectangle";
        width: number;
        height: number;
    };

    type Shape = Circle | Rectangle;


    const calculateShapeArea = (value: Shape): number => {
        if (value.shape === "circle") {
              const area = parseFloat((Math.PI * value.radius * value.radius).toFixed(2))
            return area
        }
        else if (value.shape === "rectangle") {
            const area = (value.height * value.width)
            return area
        }

        else {
            throw new Error("Unknown shape type");
        }


    }
    console.log(calculateShapeArea({ shape: "circle", radius: 5 }));
}