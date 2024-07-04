window.addEventListener("load",function(){
  let textbox = document.getElementById("textbox");
  const type = document.querySelector('#inputtype');

  type.addEventListener('change', type_change);

  function type_change(event) {
    while(textbox.firstChild){
      textbox.removeChild(textbox.firstChild);
    }
    if (type.value == "CPU" ){
      data = [
        {
          "a" : "名前",
          "b" : "name"

        },
        {
          "a" : "メーカー",
          "b" : "manufacturer"

        },
        {
          "a" : "カテゴリー",
          "b" : "category"
        },
        {
          "a" : "ソケット",
          "b" : "socket"
        },
        {
          "a" : "スレッド",
          "b" : "thread"
        },
        {
          "a" : "コア数",
          "b" : "core"
        },
        {
          "a" : "Pコア数",
          "b" : "P_core"

        },
        {
          "a" : "Eコア数",
          "b" : "E_core"

        },
        {
          "a" : "クロック",
          "b" : "clock"

        },
        {
          "a" : "GPUがあるかYes/No",
          "b" : "GPU"

        },
        {
          "a" : "最大必要電源",
          "b" : "wat"
        },
        {

          "a" : "価格",
          "b" : "price"
        }
      ];
      for (let i = 0; i < 12; i++){

        let div = document.createElement('div');
        let h2 = document.createElement('h2');
        let input = document.createElement('input');
        let hr = document.createElement('hr')

        h2.textContent = data[i].a;

        input.setAttribute('type', 'text');
        input.setAttribute('name', data[i].b);

        div.appendChild(h2);
        div.appendChild(input);
        textbox.appendChild(div);
        textbox.appendChild(hr);


      }

    }
    else if (type.value == "CPU_cooler"){
      data = [
        {
          "a" : "名前",
          "b" : "name"

        },
        {
          "a" : "メーカー",
          "b" : "manufacturer"

        },
        {
          "a" : "カテゴリー",
          "b" : "category"
        },
        {
          "a" : "ソケット",
          "b" : "socket"
        },
        {
          "a" : "ノイズ",
          "b" : "noise"
        },
        {
          "a" : "価格",
          "b" : "price"
        }
      ];
      for (let i = 0; i < 6; i++){
        let div = document.createElement('div');
        let h2 = document.createElement('h2');
        let input = document.createElement('input');
        let hr = document.createElement('hr')

        h2.textContent = data[i].a;

        input.setAttribute('type', 'text');
        input.setAttribute('name', data[i].b);

        div.appendChild(h2);
        div.appendChild(input);
        textbox.appendChild(div);
        textbox.appendChild(hr);
      }
    }
    else if (type.value == "GPU"){
      data = [
        {
          "a" : "名前",
          "b" : "name"

        },
        {
          "a" : "メーカー",
          "b" : "manufacturer"

        },
        {
          "a" : "カテゴリー",
          "b" : "category"
        },
        {
          "a" : "規格",
          "b" : "standard"
        },
        {
          "a" : "容量",
          "b" : "capacity"
        },
        {
          "a" : "消費電源",
          "b" : "wat"
        },
        {
          "a" : "価格",
          "b" : "price"
        }
      ];
      for (let i = 0; i < 7; i++){
        let div = document.createElement('div');
        let h2 = document.createElement('h2');
        let input = document.createElement('input');
        let hr = document.createElement('hr')

        h2.textContent = data[i].a;

        input.setAttribute('type', 'text');
        input.setAttribute('name', data[i].b);

        div.appendChild(h2);
        div.appendChild(input);
        textbox.appendChild(div);
        textbox.appendChild(hr);
      }
    }
    else if (type.value == "RAM"){
      data = [
        {
          "a" : "名前",
          "b" : "name"

        },
        {
          "a" : "メーカー",
          "b" : "manufacturer"

        },
        {
          "a" : "カテゴリー",
          "b" : "category"
        },
        {
          "a" : "規格",
          "b" : "standard"
        },
        {
          "a" : "メモリ容量",
          "b" : "capacity"
        },
        {
          "a" : "価格",
          "b" : "price"
        }
      ];
      for (let i = 0; i < 6; i++){
        let div = document.createElement('div');
        let h2 = document.createElement('h2');
        let input = document.createElement('input');
        let hr = document.createElement('hr')

        h2.textContent = data[i].a;

        input.setAttribute('type', 'text');
        input.setAttribute('name', data[i].b);

        div.appendChild(h2);
        div.appendChild(input);
        textbox.appendChild(div);
        textbox.appendChild(hr);
      }
    }
    else if (type.value == "ROM"){
      data = [
        {
          "a" : "名前",
          "b" : "name"

        },
        {
          "a" : "メーカー",
          "b" : "manufacturer"

        },
        {
          "a" : "カテゴリー",
          "b" : "category"
        },
        {
          "a" : "規格",
          "b" : "standard"
        },
        {
          "a" : "容量",
          "b" : "capacity"
        },
        {
          "a" : "価格",
          "b" : "price"
        }
      ];
      for (let i = 0; i < 6; i++){
        let div = document.createElement('div');
        let h2 = document.createElement('h2');
        let input = document.createElement('input');
        let hr = document.createElement('hr')

        h2.textContent = data[i].a;

        input.setAttribute('type', 'text');
        input.setAttribute('name', data[i].b);

        div.appendChild(h2);
        div.appendChild(input);
        textbox.appendChild(div);
        textbox.appendChild(hr);
      }
    }
    else if (type.value == "case"){
      data = [
        {
          "a" : "名前",
          "b" : "name"

        },
        {
          "a" : "メーカー",
          "b" : "manufacturer"

        },
        {
          "a" : "カテゴリー",
          "b" : "category"
        },
        {
          "a" : "規格",
          "b" : "standard"
        },
        {
          "a" : "価格",
          "b" : "price"
        }
      ];
      for (let i = 0; i < 5; i++){
        let div = document.createElement('div');
        let h2 = document.createElement('h2');
        let input = document.createElement('input');
        let hr = document.createElement('hr')

        h2.textContent = data[i].a;

        input.setAttribute('type', 'text');
        input.setAttribute('name', data[i].b);

        div.appendChild(h2);
        div.appendChild(input);
        textbox.appendChild(div);
        textbox.appendChild(hr);
      }
    }
    else if (type.value == "motherboard"){
      data = [
        {
          "a" : "名前",
          "b" : "name"

        },
        {
          "a" : "メーカー",
          "b" : "manufacturer"

        },
        {
          "a" : "カテゴリー",
          "b" : "category"
        },
        {
          "a" : "ソケット",
          "b" : "socket"
        },
        {
          "a" : "チップセット",
          "b" : "chip_set"
        },
        {
          "a" : "価格",
          "b" : "price"
        }
      ];
      for (let i = 0; i < 6; i++){
        let div = document.createElement('div');
        let h2 = document.createElement('h2');
        let input = document.createElement('input');
        let hr = document.createElement('hr')

        h2.textContent = data[i].a;

        input.setAttribute('type', 'text');
        input.setAttribute('name', data[i].b);

        div.appendChild(h2);
        div.appendChild(input);
        textbox.appendChild(div);
        textbox.appendChild(hr);
      }
    }
    else if (type.value == "power"){
      data = [
        {
          "a" : "名前",
          "b" : "name"

        },
        {
          "a" : "メーカー",
          "b" : "manufacturer"

        },
        {
          "a" : "カテゴリー",
          "b" : "category"
        },
        {
          "a" : "規格",
          "b" : "standard"
        },
        {
          "a" : "容量",
          "b" : "capacity"
        },
        {
          "a" : "価格",
          "b" : "price"
        }
      ];
      for (let i = 0; i < 6; i++){
        let div = document.createElement('div');
        let h2 = document.createElement('h2');
        let input = document.createElement('input');
        let hr = document.createElement('hr')

        h2.textContent = data[i].a;

        input.setAttribute('type', 'text');
        input.setAttribute('name', data[i].b);

        div.appendChild(h2);
        div.appendChild(input);
        textbox.appendChild(div);
        textbox.appendChild(hr);
      }
    }


  };


})
