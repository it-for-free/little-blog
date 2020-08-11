<?php

namespace application\models;

/**
 * Description of AuthUsers
 *
 * @author qwe
 */
class Adminusers extends BaseExampleModel
{
    /**
     * Имя таблицы пользователей
     */
    public $tableName = 'users';
    
    /**
     * @var string Критерий сортировки строк таблицы
     */
    public $orderBy = 'timestamp DESC';
    
    /**
     * Логин пользователя
     * @var type 
     */
    public $login = null;
    
    /**
     * Логин пользователя
     * @var type 
     */
    public $salt = null;
    /**
     * @var type 
     */
    public $pass = null;
    
    /**
     * @var type 
     */
    public $email = null;
    
    /**
     * @var type 
     */
    public $id = null;
    
    /**
     * @var type 
     */
    public $timestamp = null;
    
    /**
     * @var type 
     */
    public $role = null;
    

    
    /**
     * Добавляем нового пользователя
     */
    
