import React, { Component } from "react"; //imrc: import react component kısayolu
//imrc yazıp enter'a basınca kolayca bu satır geliyor.

//cc: create class kısayolu
//export default class Counter extends Component {...} olarak aşağıda export etmeden de yazılabilir.
class Counter extends Component {
  // state, react componenti için özel bir keyword'dür. Component için gerekli tüm bilgileri
  // buraya yazıyoruz.
  state = {
    count: 0,
    //imageUrl: "http://picsum.photos/200", //random 200x200 px resim verir
  };

  styleCounters = {
    fontSize: 15, //"15px" de yazılabilir
    fontWeight: "bold",
    //color: "black",
  };

  styleButtons = {
    fontWeight: "bold",
  };

  render() {
    //return <h1>Hello World</h1>;
    // bu bir jsx ifadesi olduğu için bu dosyanın uzantısı "jsx". Derleme sırasında
    // React.createElement("h1", ...) ile yukarıdaki satır, tarayıcının anlayacağı
    // dile çevrilecek. Birden fazla element varsa bunları aşağıdaki gibi "div"
    // içine almamız lazım yoksa derleme hatası oluşur. React.createElement("div", ...)
    // ile derlenecek.

    // return (
    //   <div>
    //     <h1>Hello World</h1>
    //     <button>Increment</button>
    //   </div>
    // );

    // aşağıdaki {} ifadesi arasına herhangi bir JavaScript kodu yazılabilir.
    // img src kısmına yazılan text olarak render edilir. bunu dinamik yapmak için
    // state kısmına imageUrl eklendi. Aşağıda src kısmına {} eklenerek içine yazıldı.
    return (
      <React.Fragment>
        {/* <img src={this.state.imageUrl} alt="200x200px image" /> <br /> */}

        <span id="counter1" style={this.styleCounters} className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>
        {/* <span style={{ fontSize: 15, fontWeight: "bold", color: "black" }} className={classes}>
          {this.formatCount()}
        </span> */}

        <button style={this.styleButtons} className="btn btn-danger btn-sm m-1">
          -
        </button>
        <span> / </span>
        <button style={this.styleButtons} className="btn btn-success btn-sm m-1">
          +
        </button>
        <br />

        <span id="counter2" style={this.styleCounters} className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>
        <button style={this.styleButtons} className="btn btn-danger btn-sm m-1">
          -
        </button>
        <span> / </span>
        <button style={this.styleButtons} className="btn btn-success btn-sm m-1">
          +
        </button>
        <br />
      </React.Fragment>
    );
  }

  getBadgeClasses() {
    let classes = "align-middle badge m-2 bg-";
    //classes += this.state.count === 0 ? "warning fst-italic" : "primary";

    // default warning tipi beyaz renk yazı yazdığı için modlamak zorunda kaldım.
    if (this.state.count === 0) {
      classes += "warning fst-italic";
      this.styleCounters.color = "black";
    } else {
      classes += "primary";
      delete this.styleCounters.color; // delete this.styleCounters["color"];
    }

    return classes;

    {
      /**
       * Kurstaki bootstrap eski sürüm bg-primary yerine badge-primary
       * kullanılıyor. Yeni sürümde değiştirilmiş.
       * m-2 (margin 2) yandaki elementle araya mesafe koyar
       * btn-sm: button small
       *
       * Bootstrap stillerine kendi sitesinden bakarak farklı dizaynlar
       * oluşturulabilir.
       */
    }
  }

  formatCount() {
    //return this.state.count === 0 ? "Zero" : this.state.count;
    // kursta yukarıdaki yerine aşağıdaki gibi yazmayı tercih etti (bence çok da gerekli değil)

    const { count } = this.state;
    return count === 0 ? "Zero" : count;

    /**
     * Aşağıdaki şekillerde de yazmak mümkün
     *
     * return count === 0 ? <h1>Zero</h1> : count;
     *
     * const x = <h1>Zero</h1>;
     * return count === 0 ? x : count;
     */
  }
}

export default Counter;
