
import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./contact.css";

import axios from "axios";
function ContectFormField(props) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [feedback, setFeedback] = useState('');
  const [validCheckEmail, setValidCheckEmail] = useState("")
  const [validCheckName, setValidCheckName] = useState("")
  const [validCheckFeedback, setValidCheckFeedback] = useState("")


  const data = {
    fullName: name,
    email: email,
    message: feedback,

  }

  const handleChangeEmail = (e) => {
    const value = e.trim()
    setEmail(value)
    const regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!value || regexEmail.test(value) === false) {
      setValidCheckEmail("Invalid email")
      document.getElementById("input_box_email").classList.add("input_box_email")
    }
    // /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    else {
      setValidCheckEmail("")
      document.getElementById("input_box_email").classList.remove("input_box_email")

    }
  }
  const handleChangeName = (e) => {
    // console.log(e)
    const regexAlphanumeric = /^(?=.*[a-zA-Z])(?=.*[0-9])[A-Za-z0-9][\w\-\s]+$/
    const regexAlphaNumericSpecial = /^[A-Za-z0-9 ]+$/
    const regexName = /^[A-Z a-z]{2,25}$/;
    var regexNumber = /^[0-9!@#\$%\^\&*\)\(+=._-]$/g

    setName(e)


    if (regexNumber.test(e) === false) {

      if (regexAlphaNumericSpecial.test(e) === true && regexAlphanumeric.test(e) === false) {
        e = e.trim()


        if (!e || regexName.test(e) === false) {
          setValidCheckName("Invalid name")
          document.getElementById("input_box_name").classList.add("input_box_name")
        }
        else {
          setValidCheckName("")
          document.getElementById("input_box_name").classList.remove("input_box_name")
        }
      }
      else {
        setValidCheckName("Invalid input. Enter letters only")
      }

    }
    else {
      setValidCheckName("Invalid input. Enter letters only")
    }


  }


  const handleChangeFeedback = (e) => {
    console.log(e)
    setFeedback(e)

    e = e.trim()

    if (!e || e.length < 2) {
      setValidCheckFeedback("Message length must be at least 2 characters long")
      document.getElementById("input_box_feedback").classList.add("input_box_feedback")
    }

    else {
      document.getElementById("input_box_feedback").classList.remove("input_box_feedback")
      setValidCheckFeedback("")

    }
  }

  const emailValidation = () => {
    console.log(email)
    const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (!email || emailRegex.test(email) === false) {
      setValidCheckEmail(`Field can't be empty`)
      return false;
    }
    // setError('')
    setValidCheckEmail("")

    return true;
  }
  const nameVallidation = () => {
    const nameRegex = /^[A-Z a-z]{2,25}$/;
    if (!name || nameRegex.test(name) === false) {
      setValidCheckName("Field can't be empty")

      return false;
    }
    setValidCheckName("")

    return true;
  }


  const submitClick = async () => {
    if (!name || !email || !feedback) {

      if (!name) {
        setValidCheckName(`Field can't be empty`)
        document.getElementById("input_box_name").classList.remove("input_box_name")

      }
      if (!email) {
        setValidCheckEmail(`Field can't be empty`)
        document.getElementById("input_box_email").classList.remove("input_box_email")
      }
      if (!feedback) {
        setValidCheckFeedback(`Field can't be empty`)
        document.getElementById("input_box_feedback").classList.remove("input_box_feedback")

      }
    }

    if (emailValidation() && nameVallidation() && feedback.length > 1) {


      axios.post('http://spyss.dollopinfotech.com/contact_us/add', data)
        .then(res => {
          console.log('signUp sucessfull');
          console.log(res.data)
        }, err => {
          console.log(err)
        })

      setTimeout(() => {
        toast.success('Thanks For Contact Us🤗🙂',
          { position: toast.POSITION.LEFT, autoClose: 2000 })
      }, 1000);

      setName('')
      setEmail('')
      setFeedback('')

      document.getElementById("input_box_email").classList.remove("input_box_email")

    }

  }
  return (
    <>

      <div className="contact_form">
        <div class="login_sub_heading font_28 redhat_B">
          <h2 class="login_sub_heading redhat_B">SPYSS Contact <span class="redhat_SB" >Form</span></h2>

          <p class="mt-2 font_20 redhat_SB">
            Enter the basic details and Submit the Form
          </p>
        </div>
        <label class="font_17 redhat_SB label_style">Full Name<sup className="text-danger">*</sup></label>
        <div class="form-group input-group   " width="583" height="81">
          <input id="input_box_name" onChange={(e) => handleChangeName(e.target.value)} value={name} formControlName="fullName" placeholder="Ex.: Guru Birla"
            type="text" class="form_control form-control rounded-0" />
        </div>
        <span className="text-danger d-block">{validCheckName}</span>

        <label class="font_17 redhat_SB label_style mt-2">Email Address<sup className="text-danger">*</sup></label>

        <div class="form-group input-group " width="583" height="81">
          <input id="input_box_email" onChange={(e) => handleChangeEmail(e.target.value)} value={email} formControlName="email" placeholder="Ex.: mailto:gurubirla50@gmail.com"
            class="form_control form-control rounded-0" />

        </div>
        <span className="text-danger d-block">{validCheckEmail}</span>

        <label for="message" class="font_17 redhat_SB label_style mt-2">Enter Your Message<sup className="text-danger">*</sup></label>
        <div class="form-group input-group ">
          <textarea
            onChange={(e) => handleChangeFeedback(e.target.value)}
            value={feedback} type="text" cols="30" rows="5" formControlName="message" name="message" placeholder="Hii..."
            class="form-control message_text"
            id="input_box_feedback"
          >
          </textarea>
        </div>
        <span className="text-danger">{validCheckFeedback}</span>

        <br />

        <div className="input-group">

          <button
            onClick={submitClick}
            type="button"
            className="btn text-white secondary_bg btn-send_message ms-auto d-flex justify-content-center align-items-center">Send
            Message</button>
          <ToastContainer />
        </div>
      </div>

    </>
  );
}

export default ContectFormField;