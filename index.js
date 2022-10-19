const BlueCookies = (information, button, style) => {
  const el = document.createElement('div');
  el.setAttribute(
    'style',
    'position:fixed; z-index: 9999; bottom: 0; left: 0; width: 100%; display:flex; justify-content:center; align-items:center; '+style
  )
  const elLeft = document.createElement('div');
  const elRight = document.createElement('div');
  
  elLeft.setAttribute(
    'style',
    'padding: 10px; font-size: 0.8rem;'
  )
  elRight.setAttribute(
    'style',
    'padding: 10px;'
  )
  
  const acceptBtn = document.createElement('button');
  acceptBtn.setAttribute(
    'style',
    'border:none; padding: 4px 8px; border-radius: 2px; margin: 6px 10px; cursor:pointer; box-shadow: 0 4px 3px rgba(0,0,0,0.6);'
  )
  
  
  
  elLeft.innerHTML = information
  
  acceptBtn.innerHTML = button
  elRight.appendChild(acceptBtn)

  el.appendChild(elLeft);
  el.appendChild(elRight);
  document.body.appendChild(el)
}



const information = '<p data-l="This website uses cookies to improve your experience. Continue to use the site as normal if you agree to the use of cookies. If you’d like to find out more about the cookies we use or to opt-out, please see our Privacy Policy"> Este sitio web utiliza cookies para mejorar tu experiencia. Si continúas navegando en el sitio, significa que aceptas el uso de las cookies. Si deseas más información sobre las cookies que empleamos y cómo manejarlas visita nuestra Política de Privacidad. <a href="#" style="color: #061E41" data-toggle="modal" data-target="#aviso" data-l="Privacy Policy.">Leer más.</a></p>'

const button = '<span data-l="Accept">Aceptar</span>'

BlueCookies(information, button, 'background-color: #0a1e3f; color:#fff;')

const BlueCookies = (information, button, style) => {
  const el = document.createElement('div');
  el.setAttribute(
    'style',
    'position:fixed; z-index: 9999; bottom: 0; left: 0; width: 100%; display:flex; justify-content:center; align-items:center; '+style
  )
  const elLeft = document.createElement('div');
  const elRight = document.createElement('div');
  
  elLeft.setAttribute(
    'style',
    'padding: 10px; font-size: 0.8rem;'
  )
  elRight.setAttribute(
    'style',
    'padding: 10px;'
  )
  
  const acceptBtn = document.createElement('button');
  acceptBtn.setAttribute(
    'style',
    'border:none; padding: 4px 8px; border-radius: 2px; margin: 6px 10px; cursor:pointer; box-shadow: 0 4px 3px rgba(0,0,0,0.6);'
  )
  
  
  
  elLeft.innerHTML = information
  
  acceptBtn.innerHTML = button
  elRight.appendChild(acceptBtn)

  el.appendChild(elLeft);
  el.appendChild(elRight);
  document.body.appendChild(el)
}



const information = '<p data-l="This website uses cookies to improve your experience. Continue to use the site as normal if you agree to the use of cookies. If you’d like to find out more about the cookies we use or to opt-out, please see our Privacy Policy"> Este sitio web utiliza cookies para mejorar tu experiencia. Si continúas navegando en el sitio, significa que aceptas el uso de las cookies. Si deseas más información sobre las cookies que empleamos y cómo manejarlas visita nuestra Política de Privacidad. <a href="#" style="color: #061E41" data-toggle="modal" data-target="#aviso" data-l="Privacy Policy.">Leer más.</a></p>'

const button = '<span data-l="Accept">Aceptar</span>'

BlueCookies(information, button, 'background-color: #0a1e3f; color:#fff;')


