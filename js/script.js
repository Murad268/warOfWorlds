window.addEventListener("DOMContentLoaded", () => {
   
   const enemy = {
      name: "Persival Lacosta",
      staticHealth: 40000,
      health: 40000,
      weapons: [
         {
            url: "./assets/icons/enemy/bow.png",
            damage: 1300,
            sound: "../assets/audio/zapsplat_warfare_medieval_fire_arrow_fire_whizz_past_fast_003_31160.mp3"
         },
         {
            url: "./assets/icons/enemy/knight (1).png",
            damage: 4000,
            sound: "../assets/audio/mech-klinok-3-32469.mp3"
         },
         {
            url: "./assets/icons/enemy/knight.png",
            damage: 500,
            sound: "../assets/audio/zapsplat_warfare_swords_blades_scrape_together_001_73755.mp3"
         },
         {
            url: "./assets/icons/enemy/swords.png",
            damage: 2500,
            sound: "../assets/audio/Drawing-A-Sword-www.fesliyanstudios.com.mp3"
         }
      ]
   }

   


   const gamer = {
      name: "Murad Agamedov",
      staticHealth: 30000,
      health: 30000,
      weapons: [
         {
            name: "Əjdarha oxu",
            url: "./assets/icons/gamer/arch.png",
            damage: 1200,
            sound: "../assets/audio/Weapon Metal Bow And Arrow Metal Thump - QuickSounds.com.mp3",
            desc: "bir zamanlar bütün Tanrıları məğlub etmiş əjdərha kralını bu silahla öldürmüşdülər"
         },
         {
            name: "Ser Fartellonun baltası",
            url: "./assets/icons/gamer/axe.png",
            damage: 700,
            sound: "../assets/audio/zapsplat_warfare_medieval_weapon_metal_heavy_scrape_pick_up_001_60454.mp3",
            desc: "Əfsanəyə görə bu qılınc Şeytana məxsus olub. Bəli Ser Fertello şeytanın əsl adı idi"
         },
         {
            name: "bunu hansı xəstə soxuşdurub mənə?",
            url: "./assets/icons/gamer/mace.png",
            damage: 15,
            sound: "../assets/audio/19374-udara-dubinkoj-po-golove-ona-dazhe-raskololas.mp3",
            desc: "Mən hələ də başa düşmürəm bunu kim mənə soxuşdurub. Küçədəki axmaqların öhdəsindən gəlməyə kömık edər bəlkə. Amma burda anamı ağladallar bununla döyüşsəm"
         },
         {
            name: "Adsız...",
            url: "./assets/icons/gamer/sword.png",
            damage: 8000,
            sound: "../assets/audio/silnyiy-zamah-i-razrez-popolam.mp3",
            desc: "Şeytanın oğlu Karnaldonun qılıncı"
         }
      ]
   }
   
   


   document.querySelector(".enemy__name").textContent = enemy.name;
   const setEnemyHealth = () => {
      if(enemy.health <= 0) {
         document.querySelector(".enemyDied").style.visibility = "visible"
      }
      
      document.querySelector(".enemy__health__line").style.width = (enemy.health/enemy.staticHealth)*100 + "%"

   }
   setEnemyHealth()
   enemy.weapons.forEach(item => {
      const weapon = document.createElement("div");
      const img = document.createElement("img")
      img.setAttribute("src", item.url)
      weapon.appendChild(img)
      weapon.classList.add("enemy__weapon");
      document.querySelector(".enemy__weapons").appendChild(weapon);
   })
   
   document.querySelector(".gamer__name").textContent = gamer.name
   const setGamerHealth = () => {
      if(gamer.health <= 0) {
         document.querySelector(".youDied").style.visibility = "visible"
      }
      
     
      document.querySelector(".gamer__health__line").style.width = (gamer.health/gamer.staticHealth)*100 + "%"
   }
   const damageGamer = () => {
      document.querySelector(".enemy").style.transform = "scale(1.2)"
      document.querySelector(".damage").style.visibility = "visible"
      let random = Math.floor(Math.random() * 4);
      gamer.health = gamer.health - enemy.weapons[random].damage
      new Audio(enemy.weapons[random].sound).play()
      setGamerHealth()
      setTimeout(() => {
         document.querySelector(".damage").style.visibility = "hidden"
         document.querySelectorAll(".gamer__weapon").forEach(item => {
            item.style.display = "flex"
         })
         document.querySelector(".enemy").style.transform = "scale(1)"
      }, 2000)
   }

   setGamerHealth()
 
   gamer.weapons.forEach((item, i) => {
      const weapon = document.createElement("div");
      const img = document.createElement("img");
      const about = document.createElement("div");
      const weaponName = document.createElement("div")
      const aboutDamage = document.createElement("div")
      const desc = document.createElement("div")
      weaponName.classList.add("weapon__name")
      about.classList.add("about__weapon")
      aboutDamage.classList.add("about__Damage")
      desc.classList.add("desc")
      weaponName.textContent = item.name;
      aboutDamage.textContent = "damage: " + item.damage;
      item.damage < 200?aboutDamage.style.color = "red":item.damage < 800?aboutDamage.style.color = "yellow":aboutDamage.style.color = "green"
      desc.textContent = item.desc
      img.setAttribute("src", item.url)
      weapon.appendChild(img)
      weapon.appendChild(about)
      about.appendChild(weaponName)
      about.appendChild(desc)
      about.appendChild(aboutDamage)
      weapon.classList.add("gamer__weapon");
    
      document.querySelector(".gamer__weapons").appendChild(weapon);
      weapon.addEventListener("click", () => {
         new Audio(item.sound).play()
         document.querySelectorAll(".gamer__weapon").forEach(item => {
            item.style.display = "none"
         })
         enemy.health -= item.damage
         setEnemyHealth()

         setTimeout(() => {
          
            damageGamer()
            
         }, 4500)
      })
      weapon.addEventListener("mouseover", () => {
         document.querySelectorAll(".about__weapon").forEach(weapon => {
            weapon.style.opacity = 0
         })
         document.querySelectorAll(".about__weapon")[i].style.opacity = 1
      })
      weapon.addEventListener("mouseleave", () => {
         document.querySelectorAll(".about__weapon").forEach(weapon => {
            weapon.style.opacity = 0
         })
      })
   })
})

