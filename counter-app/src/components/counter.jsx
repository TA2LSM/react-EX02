import React, { Component } from "react"; //imrc: import react component kısayolu
//imrc yazıp enter'a basınca kolayca bu satır geliyor.

//cc: create class kısayolu
//export default class Counter extends Component {...} olarak aşağıda export etmeden de yazılabilir.
class Counter extends Component {
  constructor() {
    super();
    // Component class'ını içeren Counter class'ı burada child class olduğu için önce ana
    // class'ı super() ile çağırmak gerekiyor.

    this.handleDecrement = this.handleDecrement.bind(this);
    this.handleIncrement = this.handleIncrement.bind(this);
    // "this" bu noktada erişilebilir o nedenle handleIncrement metodu burada this'in gösterdiği
    // Counter class objesine bağlandı. bind metodu yeni bir fonksiyon (obje) döneceği için
    // dönen değeri de metoda attık. İLGİNÇ DEĞİL Mİ !!!
    // handleIncrement arrow function tipinde olsaydı buna gerek olmayacaktı.
  }

  // state, react componenti için özel bir keyword'dür. Component için gerekli tüm bilgileri
  // buraya yazıyoruz.
  state = {
    count: 5,
    count1: 3,
    //count2: 1,
    tags: ["tag1", "tag2", "tag3"],
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

  handleIncrement = (counter) => {
    console.log("Gelen parametre: ", counter);
    // ++this.state.count; // bu react'da işe yaramaz.
    this.setState({ count: this.state.count + 1 }); // bu şekilde "+ 1" yazılması gerekiyor
  };

  handleDecrement() {
    // --this.state.count; // bu react'da işe yaramaz.
    if (this.state.count > 0) this.setState({ count: this.state.count - 1 });
  }

  renderTags() {
    if (this.state.tags.length === 0) return <p>There are no tags!</p>; //return null;
    return (
      <ul>
        {this.state.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
    /**
     * unique id (key) şu: eğer bir element değişirse react bunu id'sinden
     * anlıyor ve hemen değişikliği yapıyor. Bu nedenle id lazım.
     */
  }

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
      // <React.Fragment> da kullanılabilir
      <div>
        {/* <img src={this.state.imageUrl} alt="200x200px image" /> <br /> */}
        {/* <span style={{ fontSize: 15, fontWeight: "bold", color: "black" }} className={classes}>
          {this.formatCount()}
        </span> */}
        <span style={this.styleCounters} className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>
        <button
          onClick={this.handleDecrement} //burada this.handleDecrement() olursa büyük hata olur
          style={this.styleButtons}
          className="btn btn-danger btn-sm m-1"
        >
          DEC
        </button>
        <span> / </span>
        <button
          //onClick={this.handleIncrement}
          onClick={() => this.handleIncrement("count1")}
          style={this.styleButtons}
          className="btn btn-success btn-sm m-1"
        >
          INC
        </button>
        <br />
        {/* ** Dinamik olarak değişkenlere ve metotlara erişim için mutlaka {} lazım 
            ** Aşağıdaki ifadede uzunluk 0 ise lojik olarak 1, metin de "null" değil yani 1
            1 && 1 sonucu olarak metin yazılıyor. JavaScript'te boolean olmayan değişkenler
            arasında da lojik işlemler yapılabiliyor. Fakat firefox'ta denediğim kadarıyla
            true && "Hi" değerinin sonucu "Hi" iken ifadeler yer değişirse sonuç "true"
            olarak çıkıyor. ("Hi" olarak verilen string'te en az 1 karakter olmalı)
            JavaScript engine bu şekilde çalışıyor. Soldan sağa doğru bakılıyor. İfadeler
            doğru olarak gittiği sürece en sağdaki sonuç olarak çıkıyor. İfadelerden doğru
            olmayan olduğu an da sonuç o ifade olarak çıkıyor.
        */}
        {this.state.tags.length === 0 && "Please create a new tag!"}
        {this.renderTags()};
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "align-middle badge m-2 bg-";
    //classes += this.state.count === 0 ? "warning fst-italic" : "primary";

    // default warning tipi beyaz renk yazı yazdığı için modlamak zorunda kaldım.
    if (this.state.count === 0) {
      classes += "warning fst-italic";
      //this.styleCounters.color = "black"; // styleCounters read-only hatası verir
    } else {
      classes += "primary";
      //this.styleCounters.color = "white";
      // delete this.styleCounters.color; // delete this.styleCounters["color"];
    }

    return classes;
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
