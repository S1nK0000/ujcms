package com.ujcms.cms.core.domain.base;

import io.swagger.v3.oas.annotations.media.Schema;
import java.io.Serializable;
import javax.validation.constraints.NotNull;
import org.hibernate.validator.constraints.Length;
import org.springframework.lang.Nullable;

/**
 * This class was generated by MyBatis Generator.
 *
 * @author MyBatis Generator
 */
public class GroupBase implements Serializable {
    private static final long serialVersionUID = 1L;

    /**
     * 数据库表名
     */
    public static final String TABLE_NAME = "group";

    /**
     * 用户组ID
     */
    @NotNull
    @Schema(description="用户组ID")
    private Integer id = 0;

    /**
     * 名称
     */
    @Length(max = 50)
    @NotNull
    @Schema(description="名称")
    private String name = "";

    /**
     * 描述
     */
    @Length(max = 300)
    @Nullable
    @Schema(description="描述")
    private String description;

    /**
     * 全部浏览权限
     */
    @NotNull
    @Schema(description="全部浏览权限")
    private Boolean allAccessPermission = true;

    /**
     * 类型(1:系统,2:常规,3:IP组)
     */
    @NotNull
    @Schema(description="类型(1:系统,2:常规,3:IP组)")
    private Short type = 2;

    /**
     * 排序
     */
    @NotNull
    @Schema(description="排序")
    private Short order = 32767;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    @Nullable
    public String getDescription() {
        return description;
    }

    public void setDescription(@Nullable String description) {
        this.description = description;
    }

    public Boolean getAllAccessPermission() {
        return allAccessPermission;
    }

    public void setAllAccessPermission(Boolean allAccessPermission) {
        this.allAccessPermission = allAccessPermission;
    }

    public Short getType() {
        return type;
    }

    public void setType(Short type) {
        this.type = type;
    }

    public Short getOrder() {
        return order;
    }

    public void setOrder(Short order) {
        this.order = order;
    }
}