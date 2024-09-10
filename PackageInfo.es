
SetPackageName(main)


FindPackage("./SimpleMath")

// SetSources("main.es")
// SetSources("testPerf1.es")
SetSources("MathTest.es")
// SetSources("win64.es")


SetHeapMemoryInBytes(12*1024)

//-- выделить память под стек основного таска
SetStackForMainTask(1024)
//-- выделить память под стек таска отрисовки
SetStackForDrawTask(1024*2)


BuildApp(app)