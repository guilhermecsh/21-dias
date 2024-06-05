class Computador{
    tipo
    processador
    video
    armazenamento
    memoriaRam
    SSD

    constructor(tipo, processador, video, armazenamento, memoriaRam, SSD){
        this.tipo = `Notebook`
        this.processador = processador
        this.video = video
        this.armazenamento = armazenamento
        this.memoriaRam = memoriaRam
        this.SSD = SSD
    }

    apresentar(){
        console.log("Minha máquina é um "  + this.tipo + ", Meu processador é um " + this.processador + ", minha placa de vídeo é "
            + this.video + ", eu tenho " + this.armazenamento + " de armazenamento" + ", tenho " + this.memoriaRam + " de ram e "
            + this.SSD + " um SSD"
        )

    }

}
let maquina = new Computador(`Notebook` , `i5` , `dedicada`, `2000gb`, `16gb`, `tenho`)
//console.log(maquina)