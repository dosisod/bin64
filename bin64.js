window.onload=()=>load()

function load() {
	bytes=document.getElementById("bytes")
	bytes=document.getElementById("bits")
	table=document.getElementById("t")
	reload()
}

function reload() {
	table.innerHTML="" //clears the table
	for(i=0;i<bytes.value;i++) {
		tr=document.createElement("tr")
		tr.id="r"+i
		index=document.createElement("th")
		index.id="c0"
		index.innerHTML=i+":"
		tr.appendChild(index)
		for (j=1;j<=bits.value;j++) { //start at 1, 0 stores index
			td=document.createElement("td")
			ck=document.createElement("input")
			ck.type="checkbox"
			ck.id="r"+i+"c"+(j-1)
			ck.onclick=()=>info()
			td.appendChild(ck)
			tr.appendChild(td)
		}
		table.appendChild(tr)
	}
}

function info() { //updates info below (binary representation)
	binary=""
	for (i=0;i<bytes.value;i++)
		for (j=0;j<bits.value;j++)
			binary+=(document.getElementById("r"+i+"c"+j).checked?1:0)

	document.getElementById("binary").innerHTML=binary
}

function update(id, num) { //pass element id and amount to change it by
	temp=document.getElementById(id)
	if (temp.value>1||num==1) temp.value=Number(document.getElementById(id).value)+num
	reload()
}

function b64() { //base64 the "raw" bits
	total=0 //adds bits to this
	for (i=0;i<bytes.value;i++)
		for (j=0;j<bits.value;j++)
			total+=document.getElementById("r"+i+"c"+j).checked<<(i*j)+j

	console.log(total)
	document.getElementById("b64").innerHTML=btoa(total)
}
