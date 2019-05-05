package com.goaltracker.repository;

import com.goaltracker.entity.User;
import org.apache.ibatis.annotations.*;

import java.util.List;

@Mapper
public interface UserRepository {

    @Select("select * from user where id = #{id}")
    User findById(long id);

    @Select("select * from user")
    List<User> findAll();

    @Delete("delete from user where id = #{id}")
    int deleteById(long id);

    @Insert("insert into user(id, name) values (#{id}, #{name})")
    int insert(User user);

    @Update("update user set name=#{name} where id=#{id}")
    int update(User user);

}
