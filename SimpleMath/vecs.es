


import * from EEmbCore

struct Vec2i {

    x: int32
    y: int32


    func OperatorAdd(lval: Vec2i, rval: Vec2i) -> Vec2i {

        let nVec = mk Vec2i { 
                x: lval.x + rval.x, 
                y: lval.y + rval.y
        }

        return nVec
    }

    func OperatorSub(lval: Vec2i, rval: Vec2i) -> Vec2i {

        let nVec = mk Vec2i { 
                x: lval.x - rval.x, 
                y: lval.y - rval.y
        }

        return nVec
    }

    func OperatorAdd(lval: Vec2i, rval: int32) -> Vec2i {

        let nVec = mk Vec2i { 
                x: lval.x + rval, 
                y: lval.y + rval
        }

        return nVec
    }

    func OperatorSub(lval: Vec2i, rval: int32) -> Vec2i {

        let nVec = mk Vec2i { 
                x: lval.x - rval, 
                y: lval.y - rval
        }

        return nVec
    }

    func OperatorMul(lval: Vec2i, rval: int32) -> Vec2i {

        let nVec = mk Vec2i { 
                x: lval.x * rval, 
                y: lval.y * rval
        }

        return nVec
    }

    func OperatorDiv(lval: Vec2i, rval: int32) -> Vec2i {

        let nVec = mk Vec2i { 
                x: lval.x / rval, 
                y: lval.y / rval
        }

        return nVec
    }

    func OperatorGetValue(self: Vec2i) -> c_string {

        let str: c_string = "Vec2i {\n\tx: " + self.x + ",\n\ty: " + self.y + "\n}"
        
        return str

    }

}


struct Vec3i {

    x: int32
    y: int32
    z: int32

    func OperatorAdd(lval: Vec3i, rval: Vec3i) -> Vec3i {

        let nVec = mk Vec3i { 
                x: lval.x + rval.x, 
                y: lval.y + rval.y,
                z: lval.z + rval.z
        }

        return nVec
    }
}

struct Vec4i {

    x: int32
    y: int32
    z: int32
    u: int32

    func OperatorAdd(lval: Vec4i, rval: Vec4i) -> Vec4i {

        let nVec = mk Vec4i { 
                x: lval.x + rval.x, 
                y: lval.y + rval.y,
                z: lval.z + rval.z,
                u: lval.u + rval.u
        }

        return nVec
    }
}

