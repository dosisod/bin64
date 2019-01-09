window.onload=()=>reload()

function reload() {
	table=document.getElementById("t")
	table.innerHTML="" //clears the table
	for(i=0;i<document.getElementById("bytes").value;i++) {
		tr=document.createElement("tr")
		tr.id="r"+i
		index=document.createElement("td")
		index.id="c0"
		index.innerHTMl="hi"
		tr.appendChild(index)
		for (j=1;j<=document.getElementById("bits").value;j++) { //start at 1, 0 stores index
			td=document.createElement("td")
			ck=document.createElement("input")
			ck.type="checkbox"
			ck.id="c"+j
			td.appendChild(ck)
			tr.appendChild(td)
		}
		table.appendChild(tr)
	}
}

function update(id, num) { //pass element id and amount to change it by
	temp=document.getElementById(id)
	if (temp.value>1||num==1) temp.value=Number(document.getElementById(id).value)+num
	reload()
}

function b64() { //base64 the "raw" bits
	//
}