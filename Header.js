import React from "react";
import { Input, Menu, Segment } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
export default function Header({page}){
    console.log(page);
      return (
          <Menu pointing secondary>
              <Link to="/home">
                  <Menu.Item
                      name='דף הבית'
                      active={page === 'דף הבית'}
                  />
              </Link>
              <Link to="/userrecipes">
                  <Menu.Item
                      name='המתכונים שלי'
                      active={page === 'המתכונים שלי'}
                  />
              </Link>
              <Link to="/allRecipes">
                  <Menu.Item
                      name='מתכונים'
                      active={page === 'מתכונים'}
                  />
              </Link>
              <Link to="/buy">
                  <Menu.Item
                      name='רשימת קניות'
                      active={page == 'רשימת קניות'}
                  />
              </Link>
              <Link to="/addRecipe">
                  <Menu.Item
                      name='הוספת מתכון'
                      active={page === 'הוספת מתכון'}
                  />
              </Link>
              <Link to="/addCategory">
                  <Menu.Item
                      name='הוספת קטגוריה'
                      active={page === 'הוספת קטגוריה'}
                  />
              </Link>
              <Link to="/">
                  <Menu.Menu position='left'>
                      <Menu.Item
                          name='החלף משתמש'
                      />
                  </Menu.Menu>
              </Link>
          </Menu>
  
      )
  }
  
 